import React , { Component } from 'react'
import { createStackNavigation } from '@react-navigation/stack'

import AuthStackScreens from './AuthStackScreens'

export default AppStackScreens = () => {
  const AppStack = createStackNavigation();
  return (
      <AppStack.Navigator headerMode="none">
          <AppStack.Screen name = "Auth" Component = {AuthStackScreens} />
          
      </AppStack.Navigator>
  )
}