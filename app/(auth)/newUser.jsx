import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
const { width } = Dimensions.get('window');
export default function NewUser() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [weightGoal, setWeightGoal] = useState(''); // weight goal state
  const [exerciseGoal, setExerciseGoal] = useState(''); // weight goal state
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (
      (currentPage === 0 && name) ||
      (currentPage === 1 && height) ||
      (currentPage === 2 && weight) ||
      (currentPage === 3 && gender) ||
      (currentPage === 4 && weightGoal) ||
      (currentPage === 5 && exerciseGoal)// Check for weight goal
    ) {
      const nextPage = currentPage + 1;
      if (nextPage < 6) {
        scrollViewRef.current?.scrollTo({ x: nextPage * width, animated: true });
        setCurrentPage(nextPage);
      }
    }
  };

  const handlePrevious = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
      scrollViewRef.current?.scrollTo({ x: previousPage * width, animated: true });
      setCurrentPage(previousPage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={(currentPage === 0 && name) || (currentPage === 1 && height) || (currentPage === 2 && weight) || (currentPage === 3 && gender) || (currentPage === 4 && weightGoal)}
        contentContainerStyle={styles.scrollContainer}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
      >
        {/* Page 1 - Name Input */}
        <View style={styles.page}>
          <Text style={styles.title}>İsim</Text>
          <Text style={styles.subtitle}>Merhaba</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="İsim"
              placeholderTextColor="#AAAAAA"
              value={name}
              onChangeText={setName}
            />
          </View>
          <Text style={styles.note}>
            İsminiz gizli kalır ve yalnızca sizin tarafınızdan görülür.
          </Text>
          <TouchableOpacity
            style={[styles.nextButton, name ? styles.activeButton : styles.disabledButton]}
            onPress={handleNext}
            disabled={!name}
          >
            <Icon name="arrow-forward" size={24} color="#656565" />
          </TouchableOpacity>
        </View>

        {/* Page 2 - Height Input */}
        <View style={styles.page}>
          <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
            <Icon name="arrow-back" size={30} color="#FAF7F0" />
          </TouchableOpacity>
          <Text style={styles.title}>Boyunuzu Giriniz</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={height}
              onValueChange={(itemValue) => setHeight(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Seçiniz..." value="" />
              {Array.from({ length: 81 }, (_, i) => (
                <Picker.Item key={i} label={`${140 + i} cm`} value={`${140 + i}`} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity
            style={[styles.nextButton, height ? styles.activeButton : styles.disabledButton]}
            onPress={handleNext}
            disabled={!height}
          >
            <Icon name="arrow-forward" size={24} color="#656565" />
          </TouchableOpacity>
        </View>

        {/* Page 3 - Weight Input */}
        <View style={styles.page}>
          <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
            <Icon name="arrow-back" size={30} color="#FAF7F0" />
          </TouchableOpacity>
          <Text style={styles.title}>Kilonuzu Giriniz</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={weight}
              onValueChange={(itemValue) => setWeight(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Seçiniz..." value="" />
              {Array.from({ length: 151 }, (_, i) => (
                <Picker.Item key={i} label={`${30 + i} kg`} value={`${30 + i}`} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity
            style={[styles.nextButton, weight ? styles.activeButton : styles.disabledButton]}
            onPress={handleNext}
            disabled={!weight}
          >
            <Icon name="arrow-forward" size={24} color="#656565" />
          </TouchableOpacity>
        </View>

        {/* Page 4 - Gender Input */}
        <View style={styles.page}>
          <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
            <Icon name="arrow-back" size={30} color="#FAF7F0" />
          </TouchableOpacity>
          <Text style={styles.title}>Cinsiyetinizi Giriniz</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={[styles.picker]}
            >
              <Picker.Item label="Seçiniz..." value="" />
              <Picker.Item label="Erkek" value="man" />
              <Picker.Item label="Kadın" value="woman" />
            </Picker>
          </View>
          <TouchableOpacity
            style={[styles.nextButton, gender ? styles.activeButton : styles.disabledButton]}
            onPress={handleNext}
            disabled={!gender}
          >
            <Icon name="arrow-forward" size={24} color="#656565" />
          </TouchableOpacity>
        </View>

        {/* Page 5 - Weight Goal Input */}
        <View style={styles.page}>
          <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
            <Icon name="arrow-back" size={30} color="#FAF7F0" />
          </TouchableOpacity>
          <Text style={styles.title}>Kilo Hedefinizi Giriniz</Text>
          <View style={styles.radioContainer}>
            {[
              'Kilo Almak İstiyorum',
              'Kilo Vermek İstiyorum',
              'Kilomu Korumak İstiyorum',
            ].map((label, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.radioButton, weightGoal === label ? styles.selectedRadio : null]}
                onPress={() => setWeightGoal(label)}
              >
                <Text style={[styles.radioText, weightGoal === label ? styles.selectedRadioText : null]}>
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.nextButton, weightGoal ? styles.activeButton : styles.disabledButton]}
            onPress={handleNext}
            disabled={!weightGoal}
          >
            <Icon name="arrow-forward" size={24} color="#656565" />
          </TouchableOpacity>
        </View>
        {/* Page 5 - Exercise Level Input */}
        <View style={styles.page}>
          <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
            <Icon name="arrow-back" size={30} color="#FAF7F0" />
          </TouchableOpacity>
          <Text style={styles.title}>Etkinlik Hedefinizi Giriniz</Text>
          <View style={styles.radioContainer}>
            {[
              'Haftanın 1 Günü Spor Yapabilirim',
              'Haftanın 2-3 Günü Spor Yapabilirim',
              'Haftanın Her Günü Spor Yapabilirim',
            ].map((label, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.radioButton, exerciseGoal === label ? styles.selectedRadio : null]}
                onPress={() => setExerciseGoal(label)}
              >
                <Text style={[styles.radioText, exerciseGoal === label ? styles.selectedRadioText : null]}>
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.nextButton, exerciseGoal ? styles.activeButton : styles.disabledButton]}
            onPress={()=> {
              router.replace({ pathname: "/(auth)/signUp", params: { name } })
            }}
            disabled={!exerciseGoal}
          >
            <Icon name="arrow-forward" size={24} color="#656565" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4947',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  page: {
    width: width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: -20,
    left: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: 300,
    height: 70,
    backgroundColor: '#656565',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#252525',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#FAF7F0',
    textAlign: 'left',
  },
  note: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    marginVertical: 10,
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FAF7F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  activeButton: {
    backgroundColor: '#FAF7F0',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  pickerContainer: {
    width: '80%',
    backgroundColor: '#656565',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#252525',
    overflow: 'hidden',
    justifyContent: 'center'
  },
  picker: {
    width: '100%',
    height: 50,
    color: '#FAF7F0',
  },
  radioContainer: {
    marginTop: 10,
    width: '80%',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#656565',
    borderWidth: 1,
    borderColor: '#252525',
    marginVertical: 5,
  },
  selectedRadio: {
    backgroundColor: '#FAF7F0',
  },
  radioText: {
    color: '#FAF7F0',
    fontSize: 16,
  },
  selectedRadioText: {
    color: '#656565',
  },
});
