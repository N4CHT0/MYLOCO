import React from 'react';
import { View, TextInput, StyleSheet,Dime, Dimensions } from 'react-native';
import { SearchNormal1 } from 'iconsax-react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <SearchNormal1 size="18"  color="#2D2C2C" style={styles.icon}/>
      <TextInput
        style={{ marginLeft: 1, flex: 1,marginVertical: 4, }} // Style untuk TextInput
        placeholder="What do you think ?"
      />
    </View>
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
        marginTop: -10  ,
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
    }
})