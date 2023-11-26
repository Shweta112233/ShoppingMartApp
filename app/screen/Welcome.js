import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './Login';
import Register from './Register';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const WelcomeScreen = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <ScrollView>
  //       <View>
  //         <View style={styles.logo}>
  //           <Image source={require('../assets/Cart.png')} />
  //         </View>
  //         <Login navigation={navigation} />
  //         <Register />
  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
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

export default WelcomeScreen;
