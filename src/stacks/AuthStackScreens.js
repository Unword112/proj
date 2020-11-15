import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

export default AuthStackScreens = () => {
  const AppStack = createStackNavigator();
  return (
      <AppStack.Navigator headerMode = "none">
          <AuthStack.Screen name = "Signin" component = {SignInScreen} />
          <AuthStack.Screen name = "SignUp" component = {SignUpScreen} />
      </AppStack.Navigator>
  )
}