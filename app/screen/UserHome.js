// HomeScreen.js
import React, { useState } from 'react';
import { SafeAreaView, View, Button, Image, StyleSheet, StatusBar, TextInput } from 'react-native';
import ProductList from './ProductList';
import Search from './Search';

const UserHomeScreen = ({ navigation }) => {  
  
  return (
    <SafeAreaView style={styles.container}>  
    <View>
      <Button title='Cart' onPress={() => {navigation.navigate('Cart')}}/>    
      <Search/>
      <ProductList/>
      </View>                       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0
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
  }
});

export default UserHomeScreen;
