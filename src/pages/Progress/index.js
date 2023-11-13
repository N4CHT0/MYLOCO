import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

const Progress = () => {
  return (
    <ScrollView>
        <View style={{flexDirection: 'column'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row',justifyContent: 'center', gap: 20,padding: 12, marginTop: -18}}>
                    <TouchableOpacity>
                        <View style={{padding: 18, backgroundColor: '#2D2C2C',marginVertical: 20, borderRadius: 18,}}>
                            <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 18, color: '#D6D6D6' }}>Running</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{padding: 18, backgroundColor: '#2D2C2C',marginVertical: 20, borderRadius: 18,}}>
                            <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 18, color: '#D6D6D6' }}>Workouts</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style={{padding: 18, backgroundColor: '#2D2C2C',marginVertical: 20, borderRadius: 18,}}>
                            <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 18 , color: '#D6D6D6'}}>Activity</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{padding: 18, backgroundColor: '#2D2C2C',marginVertical: 20, borderRadius: 18,}}>
                            <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 18 , color: '#D6D6D6'}}>Healthy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{padding: 18, backgroundColor: '#2D2C2C',marginVertical: 20, borderRadius: 18,}}>
                            <Text style={{fontFamily: 'SquadaOne-Regular', fontSize: 18 , color: '#D6D6D6'}}>Overrall</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </View>
    </ScrollView>
    
  )
}

export default Progress

const styles = StyleSheet.create({})