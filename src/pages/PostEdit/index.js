import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect, } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import { Category, DirectboxSend, Image, Notification, SearchNormal1,Add,AddSquare } from 'iconsax-react-native'
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
const PostEdit = ({route}) => {
    const {postId} = route.params;
    const [PostData, setPostData] = useState({
        title: '',
        description: '',
        category: {},
        totalLikes: 0,
        totalComments: 0,
      });
      const handleChange = (key, value) => {
        setPostData({
          ...PostData,
          [key]: value,
        });
      };
      const [image, setImage] = useState(null);
      const navigation = useNavigation();
      const [oldImage, setOldImage] = useState(null);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const subscriber = firestore()
          .collection('post')
          .doc(postId)
          .onSnapshot(documentSnapshot => {
            const postData = documentSnapshot.data();
            if (postData) {
              console.log('Post data: ', postData);
              setPostData({
                title: postData.title,
                description: postData.description,
              });
              setOldImage(postData.image);
              setImage(postData.image);
              setLoading(false);
            } else {
              console.log(`Blog with ID ${postId} not found.`);
            }
          });
        setLoading(false);
        return () => subscriber();
      }, [postId]);
    
      const handleImagePick = async () => {
        ImagePicker.openPicker({
          width: 1920,
          height: 1080,
          cropping: true,
        })
          .then(image => {
            console.log(image);
            setImage(image.path);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      const handleUpdate = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`blogimages/${filename}`);
        try {
          if (image !== oldImage && oldImage) {
            const oldImageRef = storage().refFromURL(oldImage);
            await oldImageRef.delete();
          }
          if (image !== oldImage) {
            await reference.putFile(image);
          }
          const url =
            image !== oldImage ? await reference.getDownloadURL() : oldImage;
          await firestore().collection('post').doc(postId).update({
            title: PostData.title,
            description: PostData.description,
            image: url,
          });
          setLoading(false);
          console.log('Post Updated!');
          navigation.navigate('PostDetail', {postId});
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <View style={{flex: 1,}}>
            <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 22,marginRight: 176}}>MYLOCO</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                </View>
            <ScrollView>
            {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'white',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color= "white"
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color="gray" variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: 'SquadaOne-Regular',
                  fontSize: 12,
                  color: "gray",
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Write your own story."
                    value={PostData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Describe your story."
                    value={PostData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL."
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpdate} style={styles.buttonUpload}>
                <DirectboxSend variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
            {loading && (
            <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="blue" />
            </View>
            )}
        </View>
    )
}

export default PostEdit

const styles = StyleSheet.create({
    image: {
      height: 250,
      width: 'auto',
      borderRadius: 10,
    },
    buttonUpload:{
        backgroundColor: '#3693F4',
        padding: 15, 
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 12, 
        marginHorizontal: 120, 
        borderRadius: 14, 
        position: 'absolute', 
        top: 670,
        left:192
    }
})
const textInput = StyleSheet.create({
    title:{
        fontSize: 14,
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})