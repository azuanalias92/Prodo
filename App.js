/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator,createAppContainer} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';


const AppNavigator = createStackNavigator(
  {
    Main: { screen: Main},
    //AddProd: { screen: AddProd , navigationOptions: ({navigation}) => ({ header: null }),},
    //ViewProd: { screen: ViewProd , navigationOptions: ({navigation}) => ({ header: null }),},
    //UpdateProd: { screen: UpdateProd , navigationOptions: ({navigation}) => ({ header: null }),},
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: "Prodo",
      headerStyle: {
        backgroundColor: '#8eb2ed',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
      <FontAwesome name='power-off' size={25} color="#fff" onPress={() => alert('This is a button!')} />
    ),
    },
  }
);


const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login , navigationOptions: ({navigation}) => ({ header: null }),},
    Signup: { screen: Signup , navigationOptions: ({navigation}) => ({ header: null }),},
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    //Initialise : { screen: Initialise , navigationOptions: ({navigation}) => ({ header: null }),},
    App : AppNavigator,
    Auth : AuthNavigator,
  },
  {
    initialRouteName: 'App',
  }
));


