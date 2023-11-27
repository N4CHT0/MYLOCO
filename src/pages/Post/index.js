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
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'

const Post = () => {
        const [postData, setpostData] = useState({
            title: "",
            description: "",
            category: {},
            totalLikes: 0,
            totalComments: 0,
        });
        const handleChange = (key, value) => {
            setpostData({
            ...postData,
            [key]: value,
            });
        };
        const [image, setImage] = useState(null);
        const navigation = useNavigation();
    return (
        <View>
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
            </ScrollView>
            <TouchableOpacity style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
                <DirectboxSend variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})
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