import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Login from './Login';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import UserHome from './UserHome';
import {
  AuthenticationContextProvider,
  useAuthenticationContext,
} from '../Context';
import {Link} from '@react-navigation/native';

const Welcome = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const {authContext, setAuthContext} = useAuthenticationContext();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!authContext) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.logo}>
              <Image source={require('../assets/Cart.png')} />
            </View>
            <Login navigation={navigation} />
            <Link to="/Register">New User?</Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <AuthenticationContextProvider>
      <UserHome />
    </AuthenticationContextProvider>
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

export default Welcome;
