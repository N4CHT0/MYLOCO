import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity,RefreshControl,ActivityIndicator } from 'react-native'
import React, {useState,useCallback,useEffect} from 'react'
import {useNavigation,useFocusEffect} from '@react-navigation/native';
import { Category, DirectSend, Key, Setting2 } from 'iconsax-react-native';
import {PostItem} from '../../components'
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';
import {formatNumber} from '../../utils/formatNumber';
const Profile = () => {
  const navigation = useNavigation();
  const handleNavigateToSettings = () => {
    navigation.navigate('Settings');
  };
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(( ) => {
    const subscriber = firestore()
      .collection('post')
      .onSnapshot(querySnapshot => {
        const post = [];
        querySnapshot.forEach(documentSnapshot => {
          post.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setPostData(post);
        setLoading(false);
      });
    return () => subscriber();
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('post')
        .onSnapshot(querySnapshot => {
          const post = [];
          querySnapshot.forEach(documentSnapshot => {
            post.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setPostData(post);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  return (
    <View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        gap: 10,
        paddingBottom: 90,
      }} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
              {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                postData.map((item, index) => <PostItem item={item} key={index}/>)
              )}
            </View>
          </View>
    </ScrollView>
    <TouchableOpacity style={styles.floatingButton}
    onPress={() => navigation.navigate("Post")}>
        <DirectSend size="32" color="white"/>
    </TouchableOpacity>
    </View>
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
  },
  floatingButton: {
    backgroundColor: '#2D2C2C', 
    padding: 20,
    position: 'absolute',
    bottom: 120,
    right: 24,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  }
})

const events = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center'
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