import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screen/Welcome'; 
import Login from './app/screen/Login';
import UserHomeScreen from './app/screen/UserHome';
import Register from './app/screen/Register';
import ProductList from './app/screen/ProductList';
import Product from './app/screen/Product';
import Cart from './app/screen/Cart';

const Stack = createStackNavigator();

const AppNavigator = () => {  
  return (     
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="UserHome" component={UserHomeScreen}  />      
        <Stack.Screen name="Product" component={Product}/>  
        <Stack.Screen name="Cart" component={Cart} />  
      
      <Stack.Screen name="Register" component={Register} />            
      <Stack.Screen name="Login" component={Login} />                 
      <Stack.Screen name="Welcome" component={WelcomeScreen} />  
    </Stack.Navigator>     
  );
};

export default AppNavigator;
