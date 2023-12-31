// HomeScreen.js
import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Button,
  Image,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import {UserContext, useAuthenticationContext} from '../Context';
import Logout from '../component/Logout';

const UserHome = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const {user, setAuthContext} = useAuthenticationContext();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        'https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages',
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text>Welcome {user}</Text>
          </View>
          <View style={{flex: 1}}>
            <Logout navigation={navigation} />
          </View>
        </View>
        <View style={{flex: 35}}>
          {!clicked && <Text style={styles.title}>Products list</Text>}
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          <ProductList
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
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
    // marginTop: StatusBar.currentHeight || 0
  },
  logo: {
    marginTop: 100,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  cart: {
    flex: 2,

    alignItems: 'flex-end',
    // paddingEnd: 90,
  },
  profile: {
    flex: 2,

    alignItems: 'flex-end',
    marginEnd: 20,
  },
});
export default UserHome;
