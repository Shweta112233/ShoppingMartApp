import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Alert, StatusBar } from 'react-native';
import React from 'react';

export default function App() {
  return (        
    <NavigationContainer>      
      <AppNavigator/>
    </NavigationContainer>        
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0
  },  
  logo :{
    marginTop: 100,
    alignItems: 'center'
  }
});