import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { Setting2 } from 'iconsax-react-native';

const Profile = () => {
  const navigation = useNavigation();
  const handleNavigateToSettings = () => {
    navigation.navigate('Settings');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} >

      <View style={styles.profileBar}>
        <Image style={styles.image} source={{
              uri:
                'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
      ></Image>

       <View style={styles.profileName}>
          <Text style={styles.profileTitle}>Alexandria</Text>
       </View>

      
       <View style={styles.badgeContainer}>

       <TouchableOpacity>
          <View style={styles.profileBadge}>
              <Text style={styles.titleBadge}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.profileBadge}>
              <Text style={styles.titleBadge}>Achrive</Text>
          </View>
        </TouchableOpacity>
        
        
        <View style={styles.iconGear} >
          <TouchableOpacity onPress={handleNavigateToSettings}>
          <Setting2 size="28" color="#2D2C2C" variant="Outline"/>
          </TouchableOpacity>
        </View>
       </View>

      </View>

      <View style={styles.statusProfile}>
        
        <View style={styles.statusFollow}>
          <Text style={styles.statusText}>Following</Text>
          <Text style={styles.profileValue}>2222</Text>
        </View>
          
        <View style={styles.statusFollow}>
          <Text style={styles.statusText}>Followed</Text>
          <Text style={styles.profileValue}>2222</Text>
        </View>

        <View style={styles.statusFollow}>
          <Text style={styles.statusText}>Achivement</Text>
          <Text style={styles.profileValue}>12</Text>
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
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>

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
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>

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
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>

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
              <Image style={events.image} source={{
                uri:
                  'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
              }}
            ></Image>
            </View>
            
            
          </View>

    </ScrollView>
    
  )
}

export default Profile

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2D2C2C',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 24,
    marginHorizontal: 20,
    marginVertical: 30,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 10,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  profileBar: {
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  profileName: {
    marginVertical: 14,
  },
  profileBadge: {
    marginHorizontal: 4,
    borderRadius: 40,
    alignContent: 'center',
    backgroundColor: 'white'
  },
  titleBadge: {
    marginHorizontal:15,
    marginVertical: 10,
    fontFamily: 'SquadaOne-Regular',
    fontSize: 16,
  },
  profileTitle: {
    fontSize: 28,
    fontFamily: 'SquadaOne-Regular'
  },
  iconGear: {
    marginHorizontal: 4,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontFamily: 'SquadaOne-Regular',
    marginHorizontal: 14,
  }, 
  statusProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 15,
  },
  statusFollow: {
    flexDirection: 'column'
  },
  profileValue: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
    textAlign: 'center'
  }
})

const events = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    width: 128,
    height: 128,
    marginHorizontal: 1,
    marginVertical: 1,
    borderRadius: 5,
    resizeMode: 'contain',
  },
})