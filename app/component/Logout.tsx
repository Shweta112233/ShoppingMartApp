import {Alert, Button, View} from 'react-native';
import auth from '@react-native-firebase/auth';

function Logout({navigation}): JSX.Element {
  const logoutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('Welcome');
      })
      .catch((error: any) => {
        console.log(error);
        Alert.alert('something wrong while logout');
      });
  };
  return (
    <View>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
}

export default Logout;
