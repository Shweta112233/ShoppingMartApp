import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screen/Welcome';
import Login from './screen/Login';
import UserHomeScreen from './screen/UserHome';
import Register from './screen/Register';
import ProductList from './screen/ProductList';
import Product from './screen/Product';
import Cart from './screen/Cart';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserHome">
      <Stack.Screen
        name="UserHome"
        component={UserHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
