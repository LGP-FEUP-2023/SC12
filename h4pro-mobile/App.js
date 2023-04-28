import React, { useEffect } from 'react'
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

const handleDeepLink = (event) => {
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
    console.log("[SUCCESS]:", data)
  })
  .catch(error => {
    console.log("[ERROR]:", error)
  });
};

const App = () => {

  useEffect(() => {
    const handleInitialUrl = async (url) => {
      if (url) {
        handleDeepLink({ url });
      }
    };

    Linking.getInitialURL().then(handleInitialUrl);
    Linking.addEventListener('url', handleDeepLink);

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