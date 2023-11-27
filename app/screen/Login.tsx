import React from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [username, onChangeUserName] = React.useState('');
  const [password, onChangepassword] = React.useState('');

  const validateUserCredentials = () => {
    if (username && password) {
      auth()
        .signInWithEmailAndPassword(username, password)
        .then((value: any) => {
          console.log(value);
          navigation.navigate('UserHome');
        })
        .catch((error: any) => {
          console.log(error);
          Alert.alert('something wrong');
        });
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangepassword}
        value={password}
        placeholder="password"
      />
      <View>
        <Button
          title="login"
          onPress={() => {
            console.log('New User');
            validateUserCredentials();
          }}
        />
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
