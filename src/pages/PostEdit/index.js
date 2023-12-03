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
import axios from 'axios';
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'
import FastImage from 'react-native-fast-image';
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
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        getPostById();
      }, [postId]);
    
      const getPostById = async () => {
        try {
          const response = await axios.get(
            `https://656a074bde53105b0dd80c76.mockapi.io/myloco/post/${postId}`,
          );
          setPostData({
            title : response.data.title,
            description : response.data.description,
            image : response.data.image,
          })
        setImage(response.data.image)
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      const handleUpdate = async () => {
        setLoading(true);
        try {
          await axios
            .put(`https://656a074bde53105b0dd80c76.mockapi.io/myloco/post/${postId}`, {
              title: PostData.title,
              image,
              description: PostData.description,
              totalComments: PostData.totalComments,
              totalLikes: PostData.totalLikes,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Profile');
        } catch (e) {
          console.log(e);
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
                <TouchableOpacity>
                    <View style={{padding: 120, marginHorizontal: 30,marginVertical: 10}}>
                        <Image variant="Bold" color="#D1D1D1" size={'90'}/>
                    </View>
                </TouchableOpacity>
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