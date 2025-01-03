import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { fetchMealData } from '../../config/fetchMealData';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Recipe() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMealID, setSelectedMealID] = useState('');
  const [expandedMeal, setExpandedMeal] = useState(null);

  useEffect(() => {
    const fetchAllMeals = () => {
      const categories = ['breakfast', 'lunch', 'dinner'];
      let allMeals = [];

      categories.forEach((category) => {
        fetchMealData(category, (mealData) => {
          if (mealData) {
            const transformedMeals = Object.entries(mealData).map(([name, details]) => ({
              id: category,
              name,
              ...details,
            }));
            allMeals = [...allMeals, ...transformedMeals];
            setMeals(allMeals);
            setFilteredMeals(allMeals);
          }
        });
      });
    };

    if (!selectedMealID) {
      fetchAllMeals();
    } else {
      fetchMealData(selectedMealID, (mealData) => {
        if (mealData) {
          const transformedMeals = Object.entries(mealData).map(([name, details]) => ({
            id: selectedMealID,
            name,
            ...details,
          }));
          setMeals(transformedMeals);
          setFilteredMeals(transformedMeals);
        }
      });
    }
  }, [selectedMealID]);

  const filterMeals = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredMeals(meals);
    } else {
      setFilteredMeals(
        meals.filter((meal) =>
          meal.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const handleExpand = (mealName) => {
    setExpandedMeal(expandedMeal === mealName ? null : mealName);
  };

  const formatSection = (title, content) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title.toUpperCase()}</Text>
        {content
          ? content.split('\\n').map((line, index) => (
              <Text key={index} style={styles.sectionItem}>
                <Text style={styles.sectionNumber}>{`${index + 1}. `}</Text>
                {line}
              </Text>
            ))
          : <Text style={styles.sectionItem}>Bilgi bulunamadı.</Text>}
      </View>
    );
  };

  const renderCircularProgress = (meal) => {
    const totalNutrients = (meal.protein || 0) + (meal.fat || 0) + (meal.carbo || 0);

    const proteinPercentage = ((meal.protein || 0) / totalNutrients) * 100;
    const fatPercentage = ((meal.fat || 0) / totalNutrients) * 100;
    const carboPercentage = ((meal.carbo || 0) / totalNutrients) * 100;

    return (
      <View style={styles.circularProgressContainer}>
        <View style={styles.pieSegmentsContainer}>
          <AnimatedCircularProgress
            size={150}
            width={10}
            fill={proteinPercentage}
            tintColor="#C96868"
            backgroundColor="transparent"
            rotation={0}
            style={{ position: 'absolute' }}
          />
          <AnimatedCircularProgress
            size={150}
            width={10}
            fill={fatPercentage}
            tintColor="#FFC470"
            backgroundColor="transparent"
            rotation={proteinPercentage * 3.6}
            style={{ position: 'absolute' }}
          />
          <AnimatedCircularProgress
            size={150}
            width={10}
            fill={carboPercentage}
            tintColor="#49af47"
            backgroundColor="transparent"
            rotation={(proteinPercentage + fatPercentage) * 3.6}
          />
          <Text style={styles.circularText}>{meal.calorie || 0} kcal</Text>
        </View>
        <View style={styles.nutrientBreakdownContainer}>
          <Text style={[styles.nutrientText, { color: '#C96868' }]}>Protein: {meal.protein || 0}g</Text>
          <Text style={[styles.nutrientText, { color:'#FFC470' }]}>Yağ: {meal.fat || 0}g</Text>
          <Text style={[styles.nutrientText, { color: '#49af47' }]}>Karbonhidrat: {meal.carbo || 0}g</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Yemek ara..."
        value={searchTerm}
        onChangeText={filterMeals}
      />

      <View style={styles.categorySelectorContainer}>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedMealID('')}
        >
          <Text style={styles.categoryButtonText}>Tüm Yemekler</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedMealID('breakfast')}
        >
          <Text style={styles.categoryButtonText}>Sabah</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedMealID('lunch')}
        >
          <Text style={styles.categoryButtonText}>Öğle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedMealID('dinner')}
        >
          <Text style={styles.categoryButtonText}>Akşam</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {filteredMeals
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((meal) => (
            <TouchableOpacity
              key={meal.name}
              style={[styles.mealCard, expandedMeal === meal.name && styles.expandedCard]}
              onPress={() => handleExpand(meal.name)}
              activeOpacity={expandedMeal ? 1 : 0} // Removes button press effect
            >
              <Text style={styles.mealName}>{meal.name}</Text>
              {expandedMeal === meal.name && (
                <View style={styles.expandedContent}>
                  {formatSection('Malzemeler', meal.ingredients)}
                  {formatSection('Yapılışı', meal.description)}
                  {renderCircularProgress(meal)}
                </View>
              )}
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#FAF7F0',
    color: Colors.dark.background,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
  categorySelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryButton: {
    backgroundColor: Colors.dark.container,
    padding: 10,
    borderRadius: 8,
  },
  categoryButtonText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingBottom: 110,
  },
  mealCard: {
    backgroundColor: Colors.dark.container,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  expandedCard: {
    padding: 20,
  },
  mealName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark.text,
    textAlign: 'center',
  },
  expandedContent: {
    alignItems: 'flex-start',
  },
  sectionContainer: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.dark.text,
    marginBottom: 5,
  },
  sectionItem: {
    fontSize: 14,
    color: Colors.dark.text,
    marginVertical: 5,
  },
  sectionNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  mealCalories: {
    fontSize: 12,
    color: Colors.dark.text,
  },
  circularProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  pieSegmentsContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularText: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  nutrientBreakdownContainer: {
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  nutrientText: {
    fontSize: 14,
    color: Colors.dark.text,
    marginVertical: 5,
    fontWeight: 'bold'
  },
});