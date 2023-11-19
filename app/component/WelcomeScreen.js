import { StyleSheet, Text, View, Image, Button, SafeAreaView, Alert, StatusBar, ScrollView } from 'react-native';
import Login from './Login';
import Register from './Register';
import React from 'react';

const WelcomeScreen = ({navigation}) => { 
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
      <View style={styles.logo}>
        <Image        
          source={require('../../assets/S.MART.jpg')}
        />
      </View>      
      <Login navigation={navigation}/>  
      <Register/>       
      </View> 
        </ScrollView>              
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
  }
});

export default WelcomeScreen;
