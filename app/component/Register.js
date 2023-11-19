import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const Register = () => {
    const [username, onChangeText] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [newUser, onChangeNewUser] = React.useState(false);
  
    return (
      <View>        
        { newUser ? <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}          
          value={username}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"          
        /></ View> : null}
        <View style={{marginTop: 10}}>
          <Button 
            title='register'
            onPress={() => {
                onChangeNewUser(true);
            }}         
          ></Button>
        </View>                                 
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    input: {        
      height: 40,     
      margin: 12,      
      borderWidth: 1,
      padding: 10,
      padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
  });
  
  export default Register;