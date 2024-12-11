import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, Image, Pressable, ActivityIndicator, Alert  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { interpolate, LayoutAnimationConfig, useAnimatedStyle, useSharedValue, withSpring, SlideInLeft, SlideOutRight } from 'react-native-reanimated'
import { useIsFocused } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
import { LineChart } from 'react-native-chart-kit';
import { fetchUserData } from "../../config/fetchUserData";
import { router } from 'expo-router';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../config/FirebaseConfig'
export default function Home() {
  const { user, isLoaded } = useUser()
  const userID = user.id
  const { signOut } = useAuth()
  const isFocused = useIsFocused();
  const scale = useSharedValue(0);
  const [selected, setSelected] = useState({
    '100ml': {
      state: false,
      color: 'transparent',
    },
    '250ml': {
      state: false,
      color: 'transparent',
    },
    '300ml': {
      state: false,
      color: 'transparent',
    },
    '500ml': {
      state: false,
      color: 'transparent',
    },
    '750ml': {
      state: false,
      color: 'transparent',
    },
    '1L': {
      state: false,
      color: 'transparent',
    },
    '2L': {
      state: false,
      color: 'transparent',
    },
  });

  const handlePressWater = (key) => {
    setSelected((prev) => {
      const updated = { ...prev };
      updated[key].state = !updated[key].state;
      updated[key].color = updated[key].state ? '#4A4967' : 'transparent';

      return updated;
    });
  };

  const updateUserWater = async (uid, newWaterValue) => {
    try {
      // Belirli bir kullanıcı dokümanına referans al
      const userDocRef = doc(db, 'users', uid);
  
      // 'water' alanını güncelle
      await updateDoc(userDocRef, {
        water: userData.water + newWaterValue,
      });
  
      console.log('Water değeri başarıyla güncellendi.');
    } catch (error) {
      console.error('Water değeri güncellenirken hata oluştu:', error);
    }
  };
  const addWater = ()=> {
    var waterAmount = 0
    if (selected['100ml'].state === true) {
      waterAmount += 0.1
    }
    if (selected['250ml'].state === true) {
      waterAmount += 0.25
    }
    if (selected['300ml'].state === true) {
      waterAmount += 0.3
    }
    if (selected['500ml'].state === true) {
      waterAmount += 0.5
    }
    if (selected['750ml'].state === true) {
      waterAmount += 0.75
    }
    if (selected['1L'].state === true) {
      waterAmount += 1
    }
    if (selected['2L'].state === true) {
      waterAmount += 2
    }
    updateUserWater(userID, waterAmount)
  }
  const screenWidth = Dimensions.get("window").width;
  const scaleMeals = {
    breakfast: useSharedValue(125),
    lunch: useSharedValue(125),
    dinner: useSharedValue(125),
    water: useSharedValue(125),
    kilo: useSharedValue(125),
    boy: useSharedValue(125),
  }

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = fetchUserData(userID, (data) => {
      setUserData(data);
      if (data == null) {
        signOut()
        router.replace('/(auth)/signIn')
        Alert.alert("OAuth Error", `Kullanıcı Bulunamadı`);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [userID]);

  
  const [focusStates, setFocusStates] = useState({
    water: false,
    breakfast: false,
    lunch: false,
    dinner: false,
    kilo: false,
    boy: false
  });

  const handlePress = (key) => {
    setFocusStates((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle odak durumu
    }));

  };
  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(350, {duration: 1500, damping: 15});
    } else {
      scale.value = 0;
    }
    
    if (focusStates.breakfast) {
      scaleMeals.breakfast.value = withSpring(200, {duration: 500, damping: 15});
    } else {
      scaleMeals.breakfast.value = withSpring(125, {duration: 500, damping: 15});
    }

    if (focusStates.lunch) {
      scaleMeals.lunch.value = withSpring(200, {duration: 500, damping: 15});
    } else {
      scaleMeals.lunch.value = withSpring(125, {duration: 500, damping: 15});
    }

    if (focusStates.dinner) {
      scaleMeals.dinner.value = withSpring(200, {duration: 500, damping: 15});
    } else {
      scaleMeals.dinner.value = withSpring(125, {duration: 500, damping: 15});
    }

    if (focusStates.water) {
      scaleMeals.water.value = withSpring(550, {duration: 500, damping: 15});
    } else {
      scaleMeals.water.value = withSpring(125, {duration: 500, damping: 15});
    }

    if (focusStates.kilo) {
      scaleMeals.kilo.value = withSpring(350, {duration: 500, damping: 15});
    } else {
      scaleMeals.kilo.value = withSpring(125, {duration: 500, damping: 15});
    }

    if (focusStates.boy) {
      scaleMeals.boy.value = withSpring(350, {duration: 500, damping: 15});
    } else {
      scaleMeals.boy.value = withSpring(125, {duration: 500, damping: 15});
    }
    
  }, [isFocused, focusStates]);
  const animatedStyle = useAnimatedStyle(() => {
    const height = scale.value
    return {
      height
    };
  });
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 25}]}>
      {userData && (
        <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.calorieContainer, animatedStyle]}>
        <View style={{justifyContent:'center', flexDirection:'row'}}>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:10}}>
            <Text style={styles.textTake}>Alınan</Text>
            <Text style={styles.textTake}>{userData.calorieTaken}</Text>
            <Text style={styles.textTake}>Kalori</Text>
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:10, alignItems:'center'}}>
            <Text style={styles.percentText}>% {parseInt((userData.calorieTaken / userData.calorieGoal) * 100)}</Text>
            <AnimatedCircularProgress
              size={110}
              width={15}
              fill={(userData.calorieTaken / userData.calorieGoal) * 100}
              tintColor="#B17457"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('')}
              backgroundColor="#D8D2C2" />
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:10}}>
            <Text style={styles.textTake}>Verilen</Text>
            <Text style={styles.textTake}>{userData.calorieGiven}</Text>
            <Text style={styles.textTake}>Kalori</Text>
          </View>
        </View>
        <View style={{justifyContent:'center', flexDirection:'row', marginVertical: 15}}>
          <Text style={styles.totalCaloriText}>{parseInt(userData.calorieTaken)} / {parseInt(userData.calorieGoal)}</Text>
          <Text style={styles.totalCaloriText}> KCAL</Text>
        </View>
        <View style={{justifyContent:'center', flexDirection:'row', marginVertical: 15}}>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:15}}>
            <Text style={styles.nutrient}>K.hidrat</Text>
            <View style={{alignItems:'center'}}>
              <AnimatedCircularProgress
              size={50}
              width={10}
              fill={(userData.carboh / userData.carbohGoal) * 100}
              tintColor="#49af47"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('')}
              backgroundColor="#D8D2C2" />
            </View>
            <Text style={styles.nutrient}>{parseInt(userData.carboh)}/{parseInt(userData.carbohGoal)} gr</Text>
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:15}}>
            <Text style={styles.nutrient}>Protein</Text>
            <View style={{alignItems:'center'}}>
              <AnimatedCircularProgress
              size={50}
              width={10}
              fill={(userData.protein / userData.proteinGoal) * 100}
              tintColor="#C96868"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('')}
              backgroundColor="#D8D2C2" />
            </View>
            <Text style={styles.nutrient}>{parseInt(userData.protein)}/{parseInt(userData.proteinGoal)} gr</Text>
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:15}}>
            <Text style={styles.nutrient}>Yağ</Text>
            <View style={{alignItems:'center'}}>
              <AnimatedCircularProgress
              size={50}
              width={10}
              fill={(userData.fat / userData.fatGoal) * 100}
              tintColor="#FFC470"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('')}
              backgroundColor="#D8D2C2" />
            </View>
            <Text style={styles.nutrient}>{parseInt(userData.fat)}/{parseInt(userData.fatGoal)} gr</Text>
          </View>
          </View>          
        </Animated.View>
        <Pressable  onPress={()=> handlePress('water')} style={{alignItems:'center', width:'100%'}}>
        <Animated.View style={[styles.mealContainer, { height: scaleMeals.water }]}>
          <Image source={require('../../assets/images/water.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'flex-start', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>Su İhtiyacı</Text>
            </View>
            <View style={{alignSelf:'flex-end', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>{userData.water.toPrecision(3)} L / {userData.waterGoal.toPrecision(3)} L</Text>
            </View>
          </View>
          <Progress.Bar progress={(userData.water / userData.waterGoal)} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
          {focusStates.water && (
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
              <View>
                <Text style={[styles.calorieText, { textAlign: 'center' }]}>İçilen Su Miktarı</Text>
                <View style={{flexDirection:'column'}}>
                  <View style={{flexDirection:'row' , justifyContent: 'center', marginVertical:15}}>
                    <View style={{marginHorizontal:25}}>
                      <TouchableOpacity onPress={()=> {handlePressWater('100ml')}} style={{backgroundColor: selected['100ml'].color, borderRadius: 10}}>
                        <Image source={require('../../assets/images/100ml.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15}} />
                        <Text style={[styles.calorieText, { textAlign: 'center', fontSize: 15 }]}>100 ml</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:25}}>
                      <TouchableOpacity onPress={()=> {handlePressWater('250ml')}} style={{backgroundColor: selected['250ml'].color, borderRadius: 10}}>
                        <Image source={require('../../assets/images/250ml.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15}} />
                        <Text style={[styles.calorieText, { textAlign: 'center', fontSize: 15 }]}>250 ml</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:25}}>
                      <TouchableOpacity onPress={()=> {handlePressWater('300ml')}} style={{backgroundColor: selected['300ml'].color, borderRadius: 10}}>
                        <Image source={require('../../assets/images/300ml.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15}} />
                        <Text style={[styles.calorieText, { textAlign: 'center', fontSize: 15 }]}>300 ml</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{flexDirection:'row' , justifyContent: 'center', marginVertical:15}}>
                    <View style={{marginHorizontal:25}}>
                      <TouchableOpacity onPress={()=> {handlePressWater('500ml')}} style={{backgroundColor: selected['500ml'].color, borderRadius: 10}}>
                        <Image source={require('../../assets/images/500ml.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15}} />
                        <Text style={[styles.calorieText, { textAlign: 'center', fontSize: 15 }]}>500 ml</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:25}}>
                      <TouchableOpacity onPress={()=> {handlePressWater('750ml')}} style={{backgroundColor: selected['750ml'].color, borderRadius: 10}}>
                        <Image source={require('../../assets/images/750ml.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15}} />
                        <Text style={[styles.calorieText, { textAlign: 'center', fontSize: 15 }]}>750 ml</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:25}}>
                      <TouchableOpacity onPress={()=> {handlePressWater('1L')}} style={{backgroundColor: selected['1L'].color, borderRadius: 10}}>
                        <Image source={require('../../assets/images/1Litre.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15}} />
                        <Text style={[styles.calorieText, { textAlign: 'center', fontSize: 15 }]}>1 L</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{flexDirection:'row' , justifyContent: 'center' , marginVertical:15}}>
                    <View style={{marginHorizontal:25}}>
                      <TouchableOpacity onPress={()=> {handlePressWater('2L')}} style={{backgroundColor: selected['2L'].color, borderRadius: 10}}>
                        <Image source={require('../../assets/images/2Litre.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15}} />
                        <Text style={[styles.calorieText, { textAlign: 'center', fontSize: 15 }]}>2 L</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
             <TouchableOpacity style={styles.addFoodButton} onPress={()=> {addWater()}}>
              <Text style={styles.addFoodButtonText}>Su Ekle</Text>
            </TouchableOpacity>
           </View>
          )}
        </Animated.View>
        </Pressable >
        <Pressable  onPress={()=> handlePress('breakfast')} style={{alignItems:'center', width:'100%'}}>
        <Animated.View style={[styles.mealContainer, { height: scaleMeals.breakfast }]}>
          <Image source={require('../../assets/images/breakfast.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'flex-start',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>Sabah Kahvaltısı</Text>
            </View>
            <View style={{alignSelf:'flex-end', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>0 KCAL</Text>
            </View>
          </View>
          <Progress.Bar progress={0.3} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
          {focusStates.breakfast && (
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
             <TouchableOpacity style={styles.addFoodButton} onPress={()=> {console.log('clicked')}}>
              <Text style={styles.addFoodButtonText}>Yemek Ekle</Text>
            </TouchableOpacity>
           </View>
          )}
        </Animated.View>
        </Pressable >
        <Pressable  onPress={()=> handlePress('lunch')} style={{alignItems:'center', width:'100%'}}>
        <Animated.View style={[styles.mealContainer, { height: scaleMeals.lunch }]}>
          <Image source={require('../../assets/images/lunch.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'flex-start',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>Öğle Yemeği</Text>
            </View>
            <View style={{alignSelf:'flex-end', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>0 KCAL</Text>
            </View>
          </View>
          <Progress.Bar progress={0.3} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
          {focusStates.lunch  && (
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
             <TouchableOpacity style={styles.addFoodButton} onPress={()=> {console.log('clicked')}}>
              <Text style={styles.addFoodButtonText}>Yemek Ekle</Text>
            </TouchableOpacity>
           </View>
          )}
        </Animated.View>
        </Pressable >
        <Pressable  onPress={()=> handlePress('dinner')} style={{alignItems:'center', width:'100%'}}>
        <Animated.View style={[styles.mealContainer, { height: scaleMeals.dinner }]}>
          <Image source={require('../../assets/images/dinner.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'flex-start',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>Akşam Yemeği</Text>
            </View>
            <View style={{alignSelf:'flex-end', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>0 KCAL</Text>
            </View>
          </View>
          <Progress.Bar progress={0.3} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
          {focusStates.dinner && (
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
             <TouchableOpacity style={styles.addFoodButton} onPress={()=> {console.log('clicked')}}>
              <Text style={styles.addFoodButtonText}>Yemek Ekle</Text>
            </TouchableOpacity>
           </View>
          )}
        </Animated.View>
        </Pressable >
        <Pressable onPress={()=> handlePress('boy')} style={{alignItems:'center', width:'100%'}}>
        <Animated.View style={[styles.mealContainer, { height: scaleMeals.boy }]}>
          <Image source={require('../../assets/images/weighing machine.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15, position:'absolute', top: -15}} />
          <View style={{flexDirection:'column', justifyContent:'space-between', width:'95%'}}>
            <View style={{alignSelf:'center',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText, { textAlign:'center' }]}>Boy Takibi</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginHorizontal: 15 }}>
              {focusStates.boy && (
                <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEventThrottle={16}
              >
                <LineChart
                  data={{
                    labels: [
                      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 
                      'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 
                      'Ekim', 'Kasım', 'Aralık'
                    ],
                    datasets: [
                      {
                        data: Object.values(userData.height)
                      },
                    ],
                  }}
                  width={screenWidth * 2} // Yatay kaydırmayı sağlamak için genişlik artırıldı
                  height={250}
                  yAxisSuffix="cm"
                  chartConfig={{
                    backgroundGradientFrom: '#2F2F2F', // Koyu bir arka plan
                    backgroundGradientTo: '#B17457', // Gradyan bitiş rengi
                    decimalPlaces: 1, // Sayıların ondalık basamağı
                    color: (opacity = 1) => `rgba(216, 210, 194, ${opacity})`, // Grafikteki çizgilerin rengi
                    labelColor: (opacity = 1) => `rgba(216, 210, 194, ${opacity})`, // Etiketlerin rengi (eksende görünenler)
                    propsForLabels: {
                      fontSize: 12, // Etiket yazı boyutu
                      fontWeight: 'bold', // Etiket yazı kalınlığı
                    },
                    style: {
                      borderRadius: 16,
                    },
                  }}
                  bezier
                  style={{
                    borderRadius: 16,
                  }}
                />
              </ScrollView>
              )}
            </View>
           </View>
        </Animated.View>
        </Pressable>
        <Pressable onPress={()=> handlePress('kilo')} style={{alignItems:'center', width:'100%'}}>
        <Animated.View style={[styles.mealContainer, { marginBottom:125, height: scaleMeals.kilo}]}>
          <Image source={require('../../assets/images/weighing machine.png')} resizeMode='center' style={{width:50, height:50, borderRadius:15, position:'absolute', top: -15}} />
          <View style={{flexDirection:'column', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'center',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText, {  }]}>Kilo Takibi</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginHorizontal: 15 }}>
              {focusStates.kilo && (
                <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEventThrottle={16}
              >
                <LineChart
                  data={{
                    labels: [
                      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 
                      'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 
                      'Ekim', 'Kasım', 'Aralık'
                    ],
                    datasets: [
                      {
                        data: Object.values(userData.weight)
                      },
                    ],
                  }}
                  width={screenWidth * 2} // Yatay kaydırmayı sağlamak için genişlik artırıldı
                  height={250}
                  yAxisSuffix="kg"
                  chartConfig={{
                    backgroundGradientFrom: '#2F2F2F', // Koyu bir arka plan
                    backgroundGradientTo: '#B17457', // Gradyan bitiş rengi
                    decimalPlaces: 1, // Sayıların ondalık basamağı
                    color: (opacity = 1) => `rgba(216, 210, 194, ${opacity})`, // Grafikteki çizgilerin rengi
                    labelColor: (opacity = 1) => `rgba(216, 210, 194, ${opacity})`, // Etiketlerin rengi (eksende görünenler)
                    propsForLabels: {
                      fontSize: 12, // Etiket yazı boyutu
                      fontWeight: 'bold', // Etiket yazı kalınlığı
                    },
                    style: {
                      borderRadius: 16,
                    },
                  }}
                  bezier
                  style={{
                    borderRadius: 16,
                  }}
                />
              </ScrollView>
              )}
            </View>
           </View>
          </Animated.View>
          </Pressable>
        </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  scrollContainer: {
    alignItems: 'center',
    flexGrow: 1
  },
  header: {
    flexDirection:'row',
    width: '100%',
    height: 75,
    backgroundColor: Colors.dark.background,
    paddingTop: 10
  },
  headerText: {
    fontSize: 35,
    color: '#D8D2C2',
    marginLeft: 70,
    fontWeight:'bold'
  },
  icon: {
    position: 'absolute',
    left: 16,
    top: 5,
    textAlign:'center',
    fontSize: 40
  },
  calorieContainer: {
    backgroundColor: Colors.dark.container,
    width:'95%',
    borderRadius:15,
    flexDirection:'column',
    paddingTop:20
  },
  textTake: {
    fontSize: 25,
    color:'#D8D2C2',
    textAlign:'center',
    fontWeight:'bold'
  },
  nutrient: {
    fontSize:17,
    color:'#D8D2C2',
    textAlign:'center',
    fontWeight:'bold'
  },
  percentText: {
    fontSize:25,
    color:'#D8D2C2',
    position:'absolute',
    fontWeight:'bold'
  },
  totalCaloriText: {
    fontSize:25,
    color:'#D8D2C2',
    textAlign:'center',
    fontWeight:'bold'
  },
  mealContainer: {
    backgroundColor: Colors.dark.container,
    width:'95%',
    height: 350,
    marginVertical:20,
    borderRadius:15,
    flexDirection:'column',
    paddingTop:20,
    justifyContent:'center',
  },
  calorieText: {
    fontSize:20,
    color:'#D8D2C2',
    fontWeight:'bold',
  },
  addFoodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FAF7F0',
    borderRadius: 10,
    width: 300,
    height: 50,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  addFoodButtonText: {
    color: '#4A4947',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
});
