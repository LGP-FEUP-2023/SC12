import React from 'react';
import 'react-native-gesture-handler';
import MainPage from './src/views/main-page.js';
import OnBoardingComponent from './src/views/onboarding-component.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainPage" component={MainPage}/>
        <Stack.Screen name="helpPage" component={OnBoardingComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App