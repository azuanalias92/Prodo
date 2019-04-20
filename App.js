/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator,createAppContainer} from 'react-navigation';
import Login from './components/Login/Login';



/*const AppNavigator = createStackNavigator({
  {
    Product: { screen: Product , navigationOptions: ({navigation}) => ({ header: null }),},
    AddProd: { screen: AddProd , navigationOptions: ({navigation}) => ({ header: null }),},
    ViewProd: { screen: ViewProd , navigationOptions: ({navigation}) => ({ header: null }),},
    UpdateProd: { screen: UpdateProd , navigationOptions: ({navigation}) => ({ header: null }),},
  },
  {
    initialRouteName: 'Product',
  }
});*/


const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login , navigationOptions: ({navigation}) => ({ header: null }),},
    //Signup: { screen: Signup , navigationOptions: ({navigation}) => ({ header: null }),},
    //ForgotPassword: { screen: ForgotPassword , navigationOptions: ({navigation}) => ({ header: null }),},
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    //Initialise : { screen: Initialise , navigationOptions: ({navigation}) => ({ header: null }),},
    //App : AppNavigator,
    Auth : AuthNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
));


