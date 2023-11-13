import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { Back } from 'iconsax-react-native';
const Setting = () => {
    const navigation = useNavigation();
    const handleNavigateToMainapp = () => {
        navigation.navigate('MainApp');
    };
    return (
        <View style={{flexDirection: 'row', alignItems:'center', backgroundColor:'#2D2C2C', padding: 4}}>
            <TouchableOpacity onPress={handleNavigateToMainapp}>
                <View style={{flexDirection: 'row', marginHorizontal: 10,marginVertical: 10,}}>
                    <Back size="32" color= '#D6D6D6'/>
                </View>
            </TouchableOpacity>
            <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 20, marginLeft: 116, color: '#D6D6D6'}}>Settings</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})