import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { SunFog, Sun1, Star, Moon, User } from 'iconsax-react-native';

const getStarted = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <View style={category.container}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={category.content}>
            <View style={category.iconContainer}>
              {category.icon}
            </View>
            <Text style={styles.text}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2C2C',
    padding: 20, // Decreased padding for a cleaner look
    borderRadius: 24, // Reduced border radius for a modern look
    shadowColor: '#000',
    marginHorizontal: 0,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    flexDirection: 'column',
    marginTop: -windowHeight*0.03,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 24,
    color: '#D6D6D6',
    marginRight: 237,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 3,
    color: '#D6D6D6',
  },
});

const category = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 40,
  },
  content: {
    backgroundColor: '#212020',
    marginVertical: 20,
    width: windowWidth * 0.3,
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#212020',
    borderRadius: 50, // Circular icon container
    width: 60, // Fixed width for the icon container
    height: 60, // Fixed height for the icon container
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const categories = [
  { icon: <Moon size={46} color="#D6D6D6" variant="Bold" />, label: 'Beginner' },
  { icon: <Sun1 size={46} color="#D6D6D6" variant="Bold" />, label: 'Standard' },
  { icon: <Star size={46} color="#D6D6D6" variant="Bold" />, label: 'Amateur' },
  { icon: <User size={46} color="#D6D6D6" variant="Bold" />, label: 'Athletic' },
];

export default getStarted;
