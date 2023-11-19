import { StyleSheet, Text, View, Image, Button, SafeAreaView, Alert, StatusBar } from 'react-native';
import Login from './app/component/Login';
import Register from './app/component/Register';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>  
    <View>
      <View style={styles.logo}>
        <Image        
          source={require('./assets/S.MART.jpg')}
        />
      </View>      
      <Login/>  
      <Register />       
      </View>         
    </SafeAreaView>
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
