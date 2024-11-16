import React, { useEffect } from 'react';
import { Colors } from './../../constants/Colors'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { interpolate, LayoutAnimationConfig, useAnimatedStyle, useSharedValue, withSpring, SlideInLeft, SlideOutRight } from 'react-native-reanimated'
import { useIsFocused } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
export default function Home() {
  const user = useUser()
  const isFocused = useIsFocused();
  const scale = useSharedValue(0);

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(350, {duration: 1500, damping: 15});
    } else {
      scale.value = 0;
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const height = scale.value
    return {
      height
    };
  });
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 25}]}>
      <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="menu" size={24} color="#D8D2C2" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Faruk</Text>
        </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.calorieContainer, animatedStyle]}>
        <View style={{justifyContent:'center', flexDirection:'row'}}>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:10}}>
            <Text style={styles.textTake}>Alınan</Text>
            <Text style={styles.textTake}>0</Text>
            <Text style={styles.textTake}>Kalori</Text>
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:10, alignItems:'center'}}>
            <Text style={styles.percentText}>% 95</Text>
            <AnimatedCircularProgress
              size={110}
              width={15}
              fill={50}
              tintColor="#B17457"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#D8D2C2" />
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:10}}>
            <Text style={styles.textTake}>Verilen</Text>
            <Text style={styles.textTake}>0</Text>
            <Text style={styles.textTake}>Kalori</Text>
          </View>
        </View>
        <View style={{justifyContent:'center', flexDirection:'row', marginVertical: 15}}>
          <Text style={styles.totalCaloriText}>0 / 3500</Text>
          <Text style={styles.totalCaloriText}> KCAL</Text>
        </View>
        <View style={{justifyContent:'center', flexDirection:'row', marginVertical: 15}}>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:15}}>
            <Text style={styles.nutrient}>Karbonhidrat</Text>
            <View style={{alignItems:'center'}}>
              <AnimatedCircularProgress
              size={50}
              width={10}
              fill={71}
              tintColor="#49af47"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#D8D2C2" />
            </View>
            <Text style={styles.nutrient}>0/410 gr</Text>
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:15}}>
            <Text style={styles.nutrient}>Protein</Text>
            <View style={{alignItems:'center'}}>
              <AnimatedCircularProgress
              size={50}
              width={10}
              fill={55}
              tintColor="#C96868"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#D8D2C2" />
            </View>
            <Text style={styles.nutrient}>0/410 gr</Text>
          </View>
          <View style={{justifyContent:'center', flexDirection:'column', marginHorizontal:15}}>
            <Text style={styles.nutrient}>Yağ</Text>
            <View style={{alignItems:'center'}}>
              <AnimatedCircularProgress
              size={50}
              width={10}
              fill={25}
              tintColor="#FFC470"
              tintTransparency
              lineCap='round'
              arcSweepAngle={270}
              rotation={225}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#D8D2C2" />
            </View>
            <Text style={styles.nutrient}>0/410 gr</Text>
          </View>
        </View>          
        </Animated.View>
        <Animated.View style={[styles.waterContainer]}>
          <Image source={require('../../assets/images/water.png')} resizeMode='center' style={{width:50, height:50, borderRadius:25, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row'}}>
            <Text style={styles.waterText}>Su İhtiyacı</Text>
            <Text style={styles.waterML}>0 / 210 ml</Text>
          </View>
          <Progress.Bar progress={0.3} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
        </Animated.View>
        <Animated.View style={[styles.mealContainer]}>
          <Image source={require('../../assets/images/breakfast.png')} resizeMode='center' style={{width:50, height:50, borderRadius:25, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'flex-start',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText,]}>Sabah Kahvaltısı</Text>
            </View>
            <View style={{alignSelf:'flex-end', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>0 KCAL</Text>
            </View>
          </View>
          <Progress.Bar progress={0.3} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
        </Animated.View>
        <Animated.View style={[styles.mealContainer]}>
          <Image source={require('../../assets/images/lunch.png')} resizeMode='center' style={{width:50, height:50, borderRadius:25, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'flex-start',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText,]}>Öğle Yemeği</Text>
            </View>
            <View style={{alignSelf:'flex-end', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>0 KCAL</Text>
            </View>
          </View>
          <Progress.Bar progress={0.3} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
        </Animated.View>
        <Animated.View style={[styles.mealContainer, { marginBottom:250 }]}>
          <Image source={require('../../assets/images/dinner.png')} resizeMode='center' style={{width:50, height:50, borderRadius:25, position:'absolute', top: -15}} />
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            <View style={{alignSelf:'flex-start',  paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>Akşam Yemeği</Text>
            </View>
            <View style={{alignSelf:'flex-end', paddingHorizontal: 15}}>
              <Text style={[styles.calorieText]}>0 KCAL</Text>
            </View>
          </View>
          <Progress.Bar progress={0.3} width={300} color='#4793AF' unfilledColor='#4793AF33' height={20} borderWidth={0} borderRadius={10} style={{marginHorizontal:10, marginVertical:7, alignSelf:'center'}}/>
        </Animated.View>
      </ScrollView>
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
  waterContainer: {
    backgroundColor: Colors.dark.container,
    width:'95%',
    height: 125,
    marginVertical:25,
    borderRadius:15,
    flexDirection:'column',
    paddingTop:20,
    justifyContent:'center'
  },
  waterText: {
    fontSize:25,
    color:'#D8D2C2',
    fontWeight:'bold',
    paddingHorizontal: 10,
    alignContent:'flex-start',
    marginHorizontal:10
  },
  waterML: {
    fontSize:25,
    color:'#D8D2C2',
    fontWeight:'bold',
    paddingHorizontal: 10,
    marginHorizontal:30
  },
  mealContainer: {
    backgroundColor: Colors.dark.container,
    width:'95%',
    height: 125,
    marginVertical:25,
    borderRadius:15,
    flexDirection:'column',
    paddingTop:20,
    justifyContent:'center'
  },
  mealText: {
    fontSize:20,
    color:'#D8D2C2',
    fontWeight:'bold',
  },
  calorieText: {
    fontSize:20,
    color:'#D8D2C2',
    fontWeight:'bold',
  }
});
