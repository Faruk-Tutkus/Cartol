import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Tabs } from "expo-router"; // Expo Router'ın Tabs bileşeni
import TabBar from "../../components/TabBar";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Dimensions } from "react-native";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../config/FirebaseConfig"; // Firebase yapılandırmanızı buradan içe aktarın
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
import { fetchUserData } from "../../config/fetchUserData";
import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import {DrawerActions} from '@react-navigation/native';
import { useRouter } from "expo-router";
const screenWidth = Dimensions.get("window").width;
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  const { userName, message, emoji } = props;
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      {/* Kullanıcı Bilgileri */}
      <View style={styles.userInfoSection}>
        <Text style={styles.greeting}>{message}<Text style={styles.emoji}>{emoji}</Text></Text>
        <Text style={styles.username}>{userName}</Text>
      </View>

      {/* Menü Listesi */}
      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => props.navigation.navigate(item.screen)}>
            <item.icon style={styles.menuIcon} size={24} color="#fff" />
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Alt Menü */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Diyet Rehberim</Text>
      </View>
    </DrawerContentScrollView>
  );
}


function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#4A4947" },
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="recipe" options={{ title: "Tarifler" }} />
      <Tabs.Screen name="ai" options={{ title: "AI" }} />
      <Tabs.Screen name="exercise" options={{ title: "Egzersiz" }} />
    </Tabs>
  );
}
export default function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const router = useRouter();
  const [message, setMessage] = useState('')
  const [emoji, setEmoji] = useState('')
  useEffect(() => {
    const time = new Date().getHours();

    if (time >= 6 && time <= 11) {
      setMessage('Günaydın');
      setEmoji(' ☀️')
    } else if (time >= 12 && time <= 16) {
      setMessage('Tünaydın');
      setEmoji(' 🌅')
    } else if (time >= 17 && time <= 21) {
      setMessage('İyi Akşamlar');
      setEmoji(' 🌆')
    } else if (time >= 22 || time <= 5) { 
      setMessage('İyi Geceler');
      setEmoji(' 😴')
    }
  }, []);


  const userID = user?.id;

  const loadUserData = () => {
    if (!userID) {
      Alert.alert("Error", "Geçerli bir kullanıcı ID'si bulunamadı.");
      setLoading(false);
      return null;
    }
  
    const unsubscribe = fetchUserData(userID, (data) => {
      if (!data) {
        signOut();
        router.replace("/(auth)/signIn");
        Alert.alert("OAuth Error", `Kullanıcı Bulunamadı`);
      } else {
        setUserData(data); // Kullanıcı verisini ayarla
      }
      setLoading(false); // Yüklenme durumunu kapat
    });
  
    return unsubscribe; // Abonelik temizleme fonksiyonunu döndür
  };
  
  useEffect(() => {
    const unsubscribe = loadUserData(); // Aboneliği başlat
  
    return () => {
      if (unsubscribe) unsubscribe(); // Aboneliği temizle
    };
  }, [userID]);
  

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#D8D2C2" }}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerShown: true,
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            width: screenWidth * 0.7,
            backgroundColor: "#1D1D1D", // Drawer arka plan rengi
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.hamburgerButton}
              onPress={() => navigation.toggleDrawer()} // Drawer'ı açma/kapatma
            >
              <Text style={{textAlign:'center'}}>
                <Ionicons name="menu" size={32} color="#fff" />
              </Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#2e2d2d", // Header arka plan rengi
          },
          headerTintColor: "#fff", // Header yazı rengi
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize:25
          },
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} userName={userData.userName} message={message} emoji={emoji} />}
      >
        <Drawer.Screen name={userData.userName} component={TabLayout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Menü Öğeleri
const menuItems = [
  { title: "Vücut İstatistikleri", screen: "BodyStats", icon: (props) => <Ionicons name="stats-chart" {...props} /> },
  { title: "Kaydedilen Diyet Listeleri", screen: "SavedDiets", icon: (props) => <Ionicons name="heart" {...props} /> },
  { title: "Bildirimler", screen: "Notifications", icon: (props) => <Ionicons name="notifications" {...props} /> },
  { title: "Ayarlar", screen: "Settings", icon: (props) => <Ionicons name="settings" {...props} /> },
  { title: "Yemek Tarifi Paylaş", screen: "ShareRecipe", icon: (props) => <MaterialCommunityIcons name="food" {...props} /> },
  { title: "Uygulamayı Değerlendir!", screen: "RateApp", icon: (props) => <FontAwesome name="star" {...props} /> },
  { title: "Arkadaşınla Paylaş!", screen: "ShareApp", icon: (props) => <Ionicons name="share-social" {...props} /> },
  { title: "Geri Bildirim Gönder", screen: "Feedback", icon: (props) => <MaterialCommunityIcons name="email" {...props} /> },
  { title: "Reklamsız Sürüm", screen: "AdFree", icon: (props) => <Ionicons name="medal" {...props} /> },
  { title: "Gizlilik Politikası", screen: "PrivacyPolicy", icon: (props) => <MaterialCommunityIcons name="shield-lock" {...props} /> },
];

const styles = StyleSheet.create({
  hamburgerButton: {
    marginLeft: 10,
    padding: 5,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#1A1A19",
  },
  userInfoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    color: "#D8D2C2",
  },
  emoji: {
    fontSize: 18,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D8D2C2",
  },
  menuContainer: {
    flex: 1,
    padding: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#D8D2C2",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  footerText: {
    textAlign: "center",
    color: "#D8D2C2",
    fontWeight: "bold",
  },
});
