
//show suggestion based on user type 
// show search result for user to select the option

import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default Search = ({navigation}) => {
    const [searchInput, onChangeText] = useState('');

    return (<TextInput
    theme={{ colors: { onSurface: "black"}}}   
    onChangeText={onChangeText}          
    value={searchInput}
    placeholder="search your favourite product"
    mode="outlined"
  />);
}

const styles = StyleSheet.create({
    input: {        
      height: 40,     
      margin: 12,      
      borderWidth: 1,    
      padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
  })