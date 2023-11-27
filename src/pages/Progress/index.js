import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Notification, SearchNormal1 } from 'iconsax-react-native'
import { useNavigation } from "@react-navigation/native";
const Progress = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 22,marginRight: 176}}>MYLOCO</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={filters.content}>
                        <TouchableOpacity>
                            <View style={filters.card}>
                                <Text style={filters.text}>Running</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={filters.card}>
                                <Text style={filters.text}>Workout</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <View style={filters.card}>
                                <Text style={filters.text}>Activity</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={filters.card}>
                                <Text style={filters.text}>Healthy</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={filters.card}>
                                <Text style={filters.text}>Overrall</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default Progress

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
})

const filters = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'center', 
        gap: 10,
        padding: 12, 
        marginTop: -12,
    },
    card: {
        padding: 15, 
        backgroundColor: '#2D2C2C',
        marginVertical: 16, 
        borderRadius: 18,
    },
    text: {
        fontFamily: 'SquadaOne-Regular', 
        fontSize: 15 , 
        color: '#D6D6D6'
    }
})