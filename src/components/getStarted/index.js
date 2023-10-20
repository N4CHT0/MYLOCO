import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
//import icon.
import { SunFog,Sun1,Star,Moon, User } from 'iconsax-react-native';
import { Star1 } from 'iconsax-react';

const getStarted = () => {
  return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text style={styles.welcome}>Get Started</Text>
        </View>
        <View style={category.container}>
            <View style={category.content}>
                <View style={category.col}>
                    <Moon size="20" color="#F4F2EF" variant="Bold"/> 
                </View>
            </View>
            <View style={category.content}>
                <View style={category.col}>
                    <Sun1 size="24" color="#F4F2EF" variant="Bold"/> 
                </View>
            </View>
            <View style={category.content}>
                <View style={category.col}>
                    <Star size="24" color="#F4F2EF" variant="Bold"/> 
                </View>
            </View> 
            <View style={category.content}>
                <View style={category.col}>
                    <User size="24" color="#F4F2EF" variant="Bold"/> 
                </View>
            </View> 
        </View>
    </View>
  )
}

export default getStarted

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        padding: 28,
        marginHorizontal: 14,
        borderRadius: 17,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        marginTop: -windowHeight*0.01,
        flexDirection: 'column',
    },
    text: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    welcome: {
        fontFamily: 'SquadaOne-Regular',
        fontSize: 20,
    },
})

const category = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      gap: 17, 
    },
    col:{
      width: '30%',
      padding: 20,
    },
    content: {
      backgroundColor: '#212020',
      marginTop: 23,
      marginBottom: 1,
      borderRadius: 37,
      height: 60,
      position: 'relative',
      justifyContent:'space-around',
      alignItems: 'flex-start'
    },
  })