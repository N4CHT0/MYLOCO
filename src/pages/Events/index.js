import { StyleSheet, Text, View,Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import SearchBar from '../../components/searchBar'

const Events = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Events</Text>
        </View>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SearchBar /> 
        </View>
          <View style={events.container}>
            
            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>
            
            
          </View>
          <View style={events.container}>
            
            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>
            
            
          </View>
          <View style={events.container}>
            
            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>
            
            
          </View>
          <View style={events.container}>
            
            <View style={events.content}>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>
            
            
          </View>

      </View>
    </ScrollView>
  )
}

export default Events

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 24,
    marginHorizontal: 20,
    marginVertical: 40,
    color: 'white'
  },
  header: {
    backgroundColor: '#2D2C2C'
  },
})

const events = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginVertical: 1,
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    width: 190,
    height: 250,
    marginHorizontal: 1,
    borderRadius: 5,
    resizeMode: 'contain',
  },
})