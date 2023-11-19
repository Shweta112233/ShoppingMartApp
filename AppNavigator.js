import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/component/WelcomeScreen'; 
import Login from './app/component/Login';
import UserHomeScreen from './app/component/UserHomeScreen';
import Register from './app/component/Register';

const Stack = createStackNavigator();

const AppNavigator = () => {  
  return (     
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />   
      <Stack.Screen name="Register" component={Register} />            
      <Stack.Screen name="Login" component={Login} />    
      <Stack.Screen name="UserHome" component={UserHomeScreen}  />
      
    </Stack.Navigator>     
  );
};

export default AppNavigator;
