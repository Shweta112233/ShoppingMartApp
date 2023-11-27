import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Register from './screen/Register';
import ProductList from './screen/ProductList';
import Product from './screen/Product';
import Cart from './screen/Cart';
import Welcome from './screen/Welcome';
import UserHome from './screen/UserHome';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="UserHome"
        component={UserHome}
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
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
