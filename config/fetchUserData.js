// fetchUserData.js
import { db } from '../config/FirebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';

/**
 * Kullanıcı verisini gerçek zamanlı olarak Firestore'dan dinler.
 * @param {string} userId - Firestore'daki kullanıcı belgesinin ID'si.
 * @param {function} callback - Veriyi işlemek için bir callback fonksiyonu.
 * @returns {function} unsubscribe - Dinlemeyi durdurmak için çağrılacak fonksiyon.
 */
export const fetchUserData = (userId, callback) => {
  if (!userId) {
    console.error('User ID gerekli.');
    return () => {};
  }

  const unsubscribe = onSnapshot(
    doc(db, 'users', userId),
    (documentSnapshot) => {
      if (documentSnapshot.exists()) {
        callback(documentSnapshot.data());
      } else {
        console.log('Kullanıcı bulunamadı.');
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
