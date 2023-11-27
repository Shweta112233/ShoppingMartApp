import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const mockUser = {
  username: 's',
  password: 's',
};
const Login = ({navigation}) => {
  const [username, onChangeUserName] = React.useState('');
  const [password, onChangepassword] = React.useState('');

  const validateUserCredentials = () => {
    if (
      !username ||
      !password ||
      username != mockUser.username ||
      password != mockUser.password
    ) {
      // Alert.alert(
      //   (title = 'Error logging in'),
      //   (message = 'Either password is incorrect or user not found'),
      // );
      // Navigate to the Register screen
      navigation.navigate('Register');
    } else {
      // Navigate to the User home screen
      navigation.navigate('UserHome');
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
