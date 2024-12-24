import { db } from '../config/FirebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';

/**
 * Kullanıcı verisini gerçek zamanlı olarak Firestore'dan dinler.
 * @param {string} mealID - Firestore'daki kullanıcı belgesinin ID'si.
 * @param {function} callback - Veriyi işlemek için bir callback fonksiyonu.
 * @returns {function} unsubscribe - Dinlemeyi durdurmak için çağrılacak fonksiyon.
 */
export const fetchMealData = (mealID, callback) => {
  if (!mealID) {
    console.error('Meal ID gerekli.');
    return () => {};
  }

  const unsubscribe = onSnapshot(
    doc(db, 'meals', mealID),
    (documentSnapshot) => {
      if (documentSnapshot.exists()) {
        callback(documentSnapshot.data());
      } else {
        console.log('Yemek bulunamadı.');
        callback(null);
      }
    },
    (error) => {
      console.error('Veri dinleme sırasında hata oluştu:', error);
      callback(null); 
    }
  );
  return unsubscribe;
};
