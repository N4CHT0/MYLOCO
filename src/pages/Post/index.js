import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import { Category, DirectboxSend, Image, Notification, SearchNormal1,AddSquare,Add } from 'iconsax-react-native'
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image'
const Post = () => {
    const [loading, setLoading] = useState(false);
        const [postData, setpostData] = useState({
            title: "",
            description: "",
            image: "",
            totalLikes: 0,
            totalComments: 0,
            createdAt: "",
        });
        const handleUpload = async () => {
            let filename = image.substring(image.lastIndexOf('/') + 1);
            const extension = filename.split('.').pop();
            const name = filename.split('.').slice(0, -1).join('.');
            filename = name + Date.now() + '.' + extension;
            const reference = storage().ref(`postimages/${filename}`);
            setLoading(true);
            try {
                await reference.putFile(image);
                const url = await reference.getDownloadURL();
                await firestore().collection('post').add({
                  title: postData.title,
                  description: postData.description,
                  image: url,
                  totalComments: postData.totalComments,
                  totalLikes: postData.totalLikes,
                  createdAt: new Date(),
                });
                setLoading(false);
                console.log('Post added!');
                navigation.navigate('Profile');
              } catch (error) {
                console.log(error);
              }
          };
        const handleChange = (key, value) => {
            setpostData({
            ...postData,
            [key]: value,
            });
        };
        const [image, setImage] = useState(null);
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
        const navigation = useNavigation();
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
                        style={{width: '100%', height: 150, borderRadius: 5,marginVertical: 20,}}
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
                            top: 3,
                            right: -5,
                            backgroundColor: '#3693F4',
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
                        <AddSquare color='gray' variant="Linear" size={42} />
                        <Text
                            style={{
                            fontFamily: 'SquadaOne-Regular',
                            fontSize: 12,
                            color: 'gray',
                            }}>
                            Upload Thumbnail
                        </Text>
                        </View>
                    </TouchableOpacity>
                    )}
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Write your own story."
                    value={postData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Describe your story."
                    value={postData.description}
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
            <TouchableOpacity onPress={handleUpload} style={styles.buttonUpload}>
                <DirectboxSend variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
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