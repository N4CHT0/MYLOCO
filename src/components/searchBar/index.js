import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions,Animated,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { SearchNormal1,Add } from 'iconsax-react-native';
import { useNavigation } from "@react-navigation/native";
const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
    <Animated.View style={[styles.container,{
        gap: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 12],
        }),
      },]}>
      <Animated.View style={[styles.content,{
          transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 0.8, 1],
                  outputRange: [0, 1.2, 1],
                }),
              },
            ],
          }]}>
        <SearchNormal1 size="18"  color="#2D2C2C" style={styles.icon}/>
        <TextInput
          style={{ marginLeft: 1, flex: 1,marginVertical: 2, }} // Style untuk TextInput
          placeholder="What do you think ?" value={searchPhrase} onChangeText={setSearchPhrase} borderWidth={0}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoFocus={true}
        />
        {searchPhrase && (
          <TouchableOpacity onPress={() => setSearchPhrase("")}>
          <View style={{marginLeft: -38}}>
            <Add
              size={18}
              color={'black'}
              variant="Linear"
              style={{ transform: [{ rotate: "45deg" }] }}
            />
          </View>
        </TouchableOpacity>
      )}
      </Animated.View>
      
    </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default SearchBar;

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 28,
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center' ,
        marginBottom: 12, 
        borderRadius: 20,
        marginTop: 15  ,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginHorizontal: 11,
        shadowOffset: {
        width: 0,
        height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 20,
    },
    content:{
      flexDirection: 'row', 
      alignItems: 'center' ,
    }
})