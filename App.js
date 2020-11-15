import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { lonicons } from '@expo/vector-icons';
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import {
  HomeScreen, 
  LoadingScreen, 
  LoginScreen, 
  MessageScreen, 
  NotificationScreen, 
  PostScreen, 
  ProfileScreen, 
  RegisterScreen } from './screens'

import * as firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyAwoUubbEmcdO0owpe3h55B5x2KOnIZwuw",
  authDomain: "socialapp-a2d63.firebaseapp.com",
  databaseURL: "https://socialapp-a2d63.firebaseio.com",
  projectId: "socialapp-a2d63",
  storageBucket: "socialapp-a2d63.appspot.com",
  messagingSenderId: "1066302096032",
  appId: "1:1066302096032:web:47b158e4da57fd8ca83fc5",
  measurementId: "G-6RKQ3RRH8Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppContainer = createStackNavigator (
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name = "ios-home" size = {24} color={tintColor} />
            }
          },
          Message: {
            screen: MessageScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name = "ios-Chatboxes" size = {24} color={tintColor} />
              }
            },
          Post: {
            screen: PostScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons 
              name = "ios-add-circle" 
              size = {48} 
              color={tintColor} 
              style={{
                shadowColor: "#E9446A" , 
                shadowOffset: { width: 0, height: 0  }, 
                shadowRadius: 10 , 
                shadowOpacity: 0.3 }}
                  />
                }
              },
          Notification: {
            screen: NotificationScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name = "ios-notifications" size = {24} color={tintColor} />
                }
              },
          Profile: {
            screen: ProfileScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name = "ios-person" size = {24} color={tintColor} />
                }
              }
        },
      {
            defaultNavigationOptions: {
              tabBarOnPress: ({navigation, defaultHandler}) => {
                if (navigation.state.key === "Post") {
                  navigation.navigate("postModel")
                } else {
                  defaultHandler()
                }
              }
            },
            tabBarOptions: {
              activeTintColor: "#161F3D",
              inactiveTintColor: "#B8BBC4",
              showLabel: false
          }
        }
      ),
      postModel: {
        screen: PostScreen
      }    
    },
    {
      mode: "model",
      headerMode: "none",
      initialRouteName: "postModel"
    }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer (
  createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppContainer,
    Auth: AppStack
  },
  {
    initialRouteName: "Loading"
  }
  )
);