import { StyleSheet, Text, View,Dimensions,Image, ScrollView } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native-windows'
import { ImageHeader } from '../../assets'
import { GetStarted } from '../../components'

const Home = () => {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={ImageHeader} style={styles.header}>
    
        </ImageBackground>
        <GetStarted/>
      </View>
      
        <ScrollView horizontal style={{marginTop:20 , marginBottom: 20}}>
          <Image style={slider.image} source={{uri: 'https://assets.vogue.in/photos/5f5f0cf1c2bf5bc3a185c294/2:3/w_1920,c_limit/how-to-start-a-fitness-routine.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://fitnessvolt.com/wp-content/uploads/2023/05/Fat-Loss-Workout-Plan-750x468.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://fitnessvolt.com/wp-content/uploads/2023/05/Weight-Loss-concept-1024x710.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg'}}></Image>
        </ScrollView>
        <View style={styles.text}>
            <Text style={styles.welcome}>Explore</Text>
        </View>
        
        <View style={{flexDirection: 'row',marginHorizontal: 30, paddingRight: 100,marginTop: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://fitnessvolt.com/wp-content/uploads/2023/05/yoga-stretching-1024x710.jpg'}}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold',color: 'black'}}>
            Too Many Myths
            </Text>
            <Text>“Don’t lift,” “Don’t eat too much protein,” and “Avoid supplements” are a few of the bad advice that is consistently thrown at women.</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',marginHorizontal: 30, paddingRight: 100,marginTop: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-recovering-in-gym-1024x710.jpg'}}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold',color: 'black'}}>
             Higher Body Fat Percentage
            </Text>
            <Text>Women usually have a higher body fat percentage than men. It is primarily because of the differences in the hormonal structure. The ladies store more fat in their hips, thighs, and breasts, which can be more resistant to fat loss.</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',marginHorizontal: 30, paddingRight: 100,marginTop: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-at-gym-for-cardio-training-1024x710.jpg'}}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold',color: 'black'}}>
            Too Much Cardio and Avoiding Weight Training
            </Text>
            <Text>It is not a coincidence that the cardio section in gyms around the world is flooded by women.</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',marginHorizontal: 30, paddingRight: 100,marginTop: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://fitnessvolt.com/wp-content/uploads/2023/05/Woman-resting-in-gym-1024x710.jpg'}}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold',color: 'black'}}>
            You Must Rest
            </Text>
            <Text>In contrast to what pop culture has been feeding us, rest is not for the weak. Even the strongest of the strong ensure they get a good night’s sleep each day.</Text>
          </View>
        </View>
    </ScrollView>
  )
}

export default Home
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight*0.19,
    paddingHorizontal: 2,
    paddingTop: 18
  },
  welcome: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
  },
  text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 32,
    marginBottom: 4,
  },
})

const slider = StyleSheet.create({
  image: {width: 250,
  height: 150,
  marginHorizontal: 8,
  borderRadius: 20,
  resizeMode: 'contain'}
})