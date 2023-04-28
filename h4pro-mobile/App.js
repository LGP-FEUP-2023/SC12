import React from 'react'
import MainPage from './src/views/main-page.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionScanner from './src/views/session-scanner.js';

const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SessionScanner" component={SessionScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App