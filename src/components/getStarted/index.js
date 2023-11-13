import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuBoard, Discover, MedalStar, People } from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const getStarted = () => {
  const navigation = useNavigation();
    const handleNavigateToEvents = () => {
        navigation.navigate('Events');
    };
  return (
    <View style={styles.container}>
      <View style={category.container}>
        <TouchableOpacity style={{alignItems: 'center', gap: 6}}>
            <MedalStar size="40" color="#D6D6D6" variant='Bold'/>
            <Text style={styles.text}>Achievment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center' , gap: 6}}>
            <MenuBoard size="40" color="#D6D6D6" variant='Bold'/>
            <Text style={styles.text}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center' , gap: 6}} onPress={handleNavigateToEvents}>
            <Discover size="40" color="#D6D6D6"variant='Bold'/>
            <Text style={styles.text}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center' , gap: 6}}>
            <People size="40" color="#D6D6D6" variant='Bold'/>
            <Text style={styles.text}>Team</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2C2C',
    padding: 18, // Decreased padding for a cleaner look
    borderRadius: 18, // Reduced border radius for a modern look
    shadowColor: '#000',
    marginHorizontal: 4,
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
    fontSize: 20,
    color: '#D6D6D6',
    marginLeft: 20,
    marginBottom: 16
  },
  text: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 14,
    color: '#D6D6D6',
  },
});

const category = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 39,
    marginRight: 8
  },
});

export default getStarted;
