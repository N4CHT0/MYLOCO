import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { Back, Logout, MessageQuestion } from 'iconsax-react-native';
const Setting = () => {
    const navigation = useNavigation();
    const handleNavigateToMainapp = () => {
        navigation.navigate('MainApp');
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
                        <TouchableOpacity style={{gap: 5,alignItems:'center'}}>
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