import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {IconHome,HomeActive,IconChart,ChartActive,ProfileActive,IconProfile} from '../../assets/'


const TabItem = ({isFocused,onPress,onLongPress,label}) => {
  const Icon = () => {
    if(label === "Home") return isFocused ? <HomeActive/> : <IconHome/>

    if(label === "Progress") return isFocused ? <ChartActive/> : <IconChart/>

    if(label === "Profile") return isFocused ? <ProfileActive/> : <IconProfile/>

    return <IconHome/>
  }
  return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}>
        <Icon />
        {/* <Text style={styles.Text(isFocused)}>{label}</Text> */}
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})