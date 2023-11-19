import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const Login = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [newUser, onChangeNewUser] = React.useState(false);

    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}          
          value={text}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="password"          
        />
        <View>
          <Button title='login' onPress={() => {
            console.log("New User");
            onChangeNewUser(true);
          }}></Button>
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
    },
  });
  
  export default Login;