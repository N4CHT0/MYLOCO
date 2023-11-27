import { StyleSheet, View } from 'react-native'
import {SearchBar} from '../../components'
import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
const Search = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        position: "absolute",
        top: 0,
        zIndex: 1000,
        right: 0,
        left: 0,
        backgroundColor: 'white',
      },
})