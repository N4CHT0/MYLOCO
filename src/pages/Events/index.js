import {StyleSheet, Text, View, ScrollView,Image, Animated, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import SearchBar from '../../components/searchBar'
import {useNavigation} from '@react-navigation/native';

const Events = () => {
  const navigation = useNavigation();
    const handleNavigateToEventsDetail = () => {
        navigation.navigate('EventsDetail');
    };
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  return (
    <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: -1}}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Events</Text>
        </View>
        
        <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{translateY: recentY}],position: 'absolute',zIndex: 999,top: 52, left: 0,right: 0, elevation: 1000 }}>
          <SearchBar /> 
        </Animated.View>
        
        <View style={{marginTop: 130}}>
        <View style={events.container}>
            
            <View style={events.content}>
              <TouchableOpacity onPress={handleNavigateToEventsDetail}>
                <Image style={events.image} source={{
                  uri:
                    'https://jbsatoday.com/wp-content/uploads/2021/10/MurphWorkoutJanus.jpg',
                }}
              ></Image>
              </TouchableOpacity>
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

      </View>
    </Animated.ScrollView>
  )
}

export default Events

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 24,
    color: 'white'
  },
  header: {
    backgroundColor: '#2D2C2C',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
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