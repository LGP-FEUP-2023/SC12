import React from 'react'
import LoginPage from './src/views/login-page.js'
import MainPage from './src/views/main-page.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false, // hide the header title
      }}>
        <Stack.Screen
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen name="Dashboard" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
