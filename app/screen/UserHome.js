// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Button, Image, StyleSheet, StatusBar, Text } from 'react-native';
import ProductList from './ProductList';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import SearchBar from './SearchBar';

const UserHomeScreen = ({ navigation }) => {  
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>  
    <View>      
    <View style={styles.cart}>
    <Entypo name="shopping-cart" size={24} color="black" onPress={() => {navigation.navigate('Cart')}}/>
      </View>
      <View style={styles.profile}>
      <FontAwesome name="user" size={24} color="black" />
      </View>
      
      
       {!clicked && <Text style={styles.title}>Products list</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />      
      <ProductList
        searchPhrase={searchPhrase}
        data={fakeData}
        setClicked={setClicked}
      />      
      </View>                       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight-10 || 0
  },  
  logo :{
    marginTop: 100,
    alignItems: 'center'
  },
  input: {        
    height: 40,     
    margin: 12,      
    borderWidth: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  cart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // paddingEnd: 90,
  },
  profile: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginEnd: 40,
  }
});
export default UserHomeScreen;
