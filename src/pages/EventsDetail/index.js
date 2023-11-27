import { StyleSheet, Text, View ,ImageBackground,ScrollView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Bookmark, Heart, Send } from 'iconsax-react-native';

const EventsDetail = () => {
  return (
    <ScrollView>
        <View>
      <ImageBackground style={{width: 420,height: 250}} source={{uri : 'https://jbsatoday.com/wp-content/uploads/2021/10/MurphWorkoutJanus.jpg'}}>

      </ImageBackground>
      <View style={{flexDirection: 'row', padding: 10, gap: 10}}>
        <TouchableOpacity>
            <Heart size="32" color="#000000"/>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Send size="32" color="#000000"/>
        </TouchableOpacity>

        <TouchableOpacity>
            <Bookmark size="32" color="#000000"/>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, marginTop: -8}}>
        <Text style={{fontFamily:'SquadaOne-Regular'}}>2 Minute ago</Text>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontFamily:'SquadaOne-Regular',fontSize: 36, textAlign: 'center'}}>Every Monday Murph Workout Challenge</Text>
        <Text style={{fontFamily:'SquadaOne-Regular',fontSize: 18, textAlign: 'center'}}>28 November - 28 December 2023</Text>
      </View>

      <TouchableOpacity>
        <View style={{padding: 40,borderRadius: 20, backgroundColor: 'white', marginVertical: 20, marginHorizontal: 20}}>
            <Text style={{fontFamily:'SquadaOne-Regular',fontSize: 20}}>Start Challenge</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 40,borderRadius: 20, backgroundColor: 'white', marginVertical: 0, marginHorizontal: 20}}>
            <Text style={{fontFamily:'SquadaOne-Regular',fontSize: 20}}>Add To Calendar</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </ScrollView>
  )
}

export default EventsDetail

const styles = StyleSheet.create({})