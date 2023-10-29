import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuBoard, Discover, MedalStar, People } from 'iconsax-react-native';

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
    padding: 28, // Decreased padding for a cleaner look
    borderRadius: 28, // Reduced border radius for a modern look
    shadowColor: '#000',
    marginHorizontal: 0,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 20,
    flexDirection: 'column',
    marginTop: -windowHeight*0.05,
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
    fontSize: 12,
    marginTop: 10,
    color: '#D6D6D6',
    textAlign: 'center',
  },
});

const category = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  content: {
    backgroundColor: '#212020',
    marginVertical: 14,
    width: windowWidth * 0.3,
    alignItems: 'center',
    alignContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#212020',
    borderRadius: 50, // Circular icon container
    width: 60, // Fixed width for the icon container
    height: 60, // Fixed height for the icon container
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const categories = [
  { icon: <MedalStar size={40} color="#D6D6D6" variant="Bold" /> , label:"Achievment" },
  { icon: <MenuBoard size={40} color="#D6D6D6" variant="Bold" /> , label:"Schedule" },
  { icon: <Discover size={40} color="#D6D6D6" variant="Bold" />  , label:"Events"},
  { icon: <People size={40} color="#D6D6D6" variant="Bold" /> , label:"Team"},
];

export default getStarted;
