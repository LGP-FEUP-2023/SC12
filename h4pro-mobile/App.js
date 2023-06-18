import React, { useEffect, useState } from 'react'
import LoginPage from './src/views/login-page.js'
import MainPage from './src/views/main-page.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import SessionScanner from './src/views/session-scanner.js';
import { View, Text } from 'react-native';
import AuthContext from './AuthContext';
import { SettingsPage } from './src/views/settings/settings-page.js';
import { LanguagePage } from './src/views/settings/language-page.js';
import { AboutPage } from './src/views/settings/about-page.js';
import Header from './src/components/header.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};

function DrawerHeader(props) {
  // TODO: get username/email from login
  return (
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
        <FontAwesome5
          name={"user"}
          size={24}
          color={"white"}
        />
        <Text style={{ color: "white", marginLeft: 10 }}>email@email.com</Text>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}


function Root({ route, navigation }) {
  const [mainPageData, setMainPageDataChange] = useState({ snackbar: false, snackmode: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    if (route.params) {
      console.log("received params: ", route.params);
      if (route.params.screen === "Home") {
        console.log("setting main page data");
        setMainPageDataChange(route.params.params);
      }
    }
  }, [route.params]);

  return (
    <Drawer.Navigator
      drawerType="front"
      drawerContent={props => <DrawerHeader {...props} />}
      initialRouteName="Home"
      screenOptions={{
        header: Header,
        drawerPosition: "right",
        drawerInactiveTintColor: "white",
        drawerStyle: {
          backgroundColor: '#363636'
        },
        itemStyle: {
          marginVertical: 10,
          color: "white"
        },
      }}
    >
      <Drawer.Screen name={t("Home")} options={{
        drawerIcon: ({ focused }) => (<FontAwesome5
          name={"home"}
          size={24}
          color={focused ? "#007aff" : "white"}
        />)
      }} >
        {props => <MainPage {...props} data={mainPageData} />}
      </Drawer.Screen>
      <Drawer.Screen name={t("Settings")} component={SettingsPage} options={{
        drawerIcon: ({ focused }) => <FontAwesome5
          name={"cog"}
          size={24}
          color={focused ? "#007aff" : "white"}
        />
      }} />
      <Drawer.Screen name={t("Help")} component={AboutPage} options={{
        drawerIcon: ({ focused }) => <FontAwesome5
          name={"info-circle"}
          size={24}
          color={focused ? "#007aff" : "white"}
        />
      }} />
      {/* TODO: Do the actual log out */}
      <Drawer.Screen name={t("Logout")} component={LoginPage} options={{
        headerShown: false,
        drawerIcon: ({ focused }) => <FontAwesome5
          name={"sign-out-alt"}
          size={24}
          color={focused ? "#007aff" : "white"}
        />
      }} />
    </Drawer.Navigator>
  );
}

const App = () => {
  const [token, setToken] = useState("");




  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false, // hide the header title
        }}>
          <Stack.Screen
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen name="Root" component={Root} />
          <Stack.Screen name="SessionScanner" component={SessionScanner} />
          <Stack.Screen name="SettingsPage" component={SettingsPage} />
          <Stack.Screen name="LanguagePage" component={LanguagePage} />
          <Stack.Screen name="AboutPage" component={AboutPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;
