import React, {useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {ScrollView} from 'react-native';
import {UserContext} from '../Context';
import {Text} from 'react-native';

const Register = ({navigation}) => {
  const [username, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const loggedUser = useContext(UserContext);

  const createUser = () => {
    if (username && password) {
      auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {
          Alert.alert('User account created & signed in!');
          navigation.navigate('UserHome');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.logo}>
            <Image source={require('../assets/Cart.png')} />
          </View>

          {loggedUser ? (
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
          ) : (
            <Text>Already registered</Text>
          )}
          <View style={{marginTop: 10}}>
            <Button
              title="register"
              onPress={() => {
                createUser();
              }}
              disabled={!username || !password}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0,
  },
  logo: {
    marginTop: 100,
    alignItems: 'center',
  },
});

export default Register;
