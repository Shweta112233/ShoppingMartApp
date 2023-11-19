// HomeScreen.js
import React from 'react';
import { SafeAreaView, View, Button, Image, StyleSheet, StatusBar } from 'react-native';

const UserHomeScreen = ({ navigation }) => {  
  return (
    <SafeAreaView style={styles.container}>  
    <View>
      <View style={styles.logo}>
        <Image        
          source={require('../../assets/Cart.png')}
        />
      </View>                 
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
  }
});

export default UserHomeScreen;
