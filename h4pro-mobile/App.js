import React, { useEffect, useState } from 'react'
import MainPage from './src/views/main-page.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionScanner from './src/views/session-scanner.js';
import { Linking } from 'react-native';

const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};


const App = () => {
  const [token, setToken] = useState("");



  const handleDeepLink = ({event}) => {
    if (event === undefined) return;
    const url = event.url;
    const { path, queryParams } = Linking.parse(url);
  
    const { padel_company_id, padel_court_id } = queryParams;
  
    const joinCourtUrl = `https://MEM4PRO/ID_PLACEHOLDER/join_court/${padel_company_id}/${padel_court_id}`;
  
    fetch(joinCourtUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setToken(data.token);
    })
    .catch(error => {
      console.log(error)
    });
  };


  // Set up the deep linking listener
  useEffect(() => {
    const handleInitialUrl = async (url) => {
      if (url) {
        handleDeepLink({ url }); // Pass token as a parameter
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SessionScanner" component={SessionScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
