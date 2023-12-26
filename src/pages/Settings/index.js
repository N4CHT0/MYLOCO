import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { Back, Logout, MessageQuestion } from 'iconsax-react-native';
const Setting = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const handleNavigateToMainapp = () => {
        navigation.navigate('MainApp');
    };
    useEffect(() => {
        const user = auth().currentUser;
        const fetchBlogData = () => {
          try {
            if (user) {
              const userId = user.uid;
              const blogCollection = firestore().collection('blog');
              const query = blogCollection.where('authorId', '==', userId);
              const unsubscribeBlog = query.onSnapshot(querySnapshot => {
                const blogs = querySnapshot.docs.map(doc => ({
                  ...doc.data(),
                  id: doc.id,
                }));
                setBlogData(blogs);
                setLoading(false);
              });
    
              return () => {
                unsubscribeBlog();
              };
            }
          } catch (error) {
            console.error('Error fetching blog data:', error);
          }
        };
    
        const fetchProfileData = () => {
          try {
            const user = auth().currentUser;
            if (user) {
              const userId = user.uid;
              const userRef = firestore().collection('users').doc(userId);
    
              const unsubscribeProfile = userRef.onSnapshot(doc => {
                if (doc.exists) {
                  const userData = doc.data();
                  setProfileData(userData);
                  fetchBlogData();
                } else {
                  console.error('Dokumen pengguna tidak ditemukan.');
                }
              });
    
              return () => {
                unsubscribeProfile();
              };
            }
          } catch (error) {
            console.error('Error fetching profile data:', error);
          }
        };
        fetchBlogData();
        fetchProfileData();
      }, []);
      const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          firestore()
            .collection('blog')
            .onSnapshot(querySnapshot => {
              const blogs = [];
              querySnapshot.forEach(documentSnapshot => {
                blogs.push({
                  ...documentSnapshot.data(),
                  id: documentSnapshot.id,
                });
              });
              setBlogData(blogs);
            });
          setRefreshing(false);
        }, 1500);
      }, []);
    const handleLogout = async () => {
        try {
          await auth().signOut();
          await AsyncStorage.removeItem('userData');
          navigation.replace('Login');
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <ScrollView>
            <View style={{flexDirection: 'row', alignItems:'center', padding: 4}}>
                <TouchableOpacity onPress={handleNavigateToMainapp}>
                    <View style={{flexDirection: 'row', marginHorizontal: 10,marginVertical: 10,}}>
                        <Back size="32" color= '#2D2C2C'/>
                    </View>
                </TouchableOpacity>
                <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 20, marginLeft: 116, color: '#2D2C2C'}}>Settings</Text>
            </View>
            <View>
                <View style={{padding:30}}>
                    <View style={{flexDirection: 'row',flexWrap: 'wrap', gap: 20}}>
                        <TouchableOpacity style={{gap: 5,alignItems:'center'}}>
                            <View>
                                <MessageQuestion size="32" color="#2D2C2C"/>
                            </View>
                            <View>
                                <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 18,textAlign: 'center'}}>Q&A</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleLogout} style={{gap: 5,alignItems:'center'}}>
                            <View>
                                <Logout size="32" color="#2D2C2C"/>
                            </View>
                            <View>
                                <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 18,textAlign: 'center'}}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Setting
const styles = StyleSheet.create({})