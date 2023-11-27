import React, {useEffect} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Register = () => {
  const [username, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [newUser, onChangeNewUser] = React.useState(false);

  useEffect(() => {
    if (newUser) {
      auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  }, [username, password, newUser]);

  return (
    <View>
      {newUser ? (
        <View>
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
          />
        </View>
      ) : null}
      <View style={{marginTop: 10}}>
        <Button
          title="register"
          onPress={() => {
            onChangeNewUser(true);
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Register;
