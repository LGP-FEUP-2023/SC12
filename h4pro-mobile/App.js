<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
=======
import React, { useEffect } from 'react'
>>>>>>> feat/qrcode_generation
import MainPage from './src/views/main-page.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionScanner from './src/views/session-scanner.js';
import { Linking } from 'react-native';
import { handleDeepLink } from './src/utils/index.js';
import AuthContext from './AuthContext';


const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};


const App = () => {
  const [token, setToken] = useState("");



  // Set up the deep linking listener
  useEffect(() => {
    const handleInitialUrl = async (url) => {
      if (url) {
        let scanned_token = handleDeepLink({ url }); // Pass token as a parameter

        if (scanned_token) {
          setToken(scanned_token);
        }

        console.log("url", url);
      }
    };

    // Check for any initial URL when the app is launched
    Linking.getInitialURL().then(handleInitialUrl);

    // Set up the listener for incoming deep links
    Linking.addEventListener('url', event => handleDeepLink(event, token));

    // Remove the deep linking listener when the component unmounts
    return () => Linking.removeEventListener('url', handleDeepLink);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="SessionScanner" component={SessionScanner} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;
