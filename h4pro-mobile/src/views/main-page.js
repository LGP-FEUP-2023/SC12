import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component, useContext, useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { CourtButton } from '../components/court-button'
import { Snackbar } from 'react-native-paper'
import AuthContext from '../../AuthContext';

const MainPage = ({ route, navigation }) => {

   const [snackbarVisible, setSnackbarVisible] = useState(false);
   const [snackMode, setSnackMode] = useState(0);
   const { token, setToken } = useContext(AuthContext);

   useEffect(() => {
      const { snackbar, snackmode } = route.params ?? {};
      if (snackbar) {
         setSnackbarVisible(true);
         setSnackMode(snackmode);
      }
   }, [route.params]);

   const dismissSnackbar = () => {
      setSnackbarVisible(false);
   };

   return (
      <View style={styles.container}>
         <MyStatusBar />
         <Image style={styles.logo}
            source={IMAGES.logo}
         />
         <MyScoreBoard />
         <CourtButton text={"join court"} icon={IMAGES.join} onPress={() => navigation.navigate('SessionScanner')} />
         <CourtButton text={"leave court"} icon={IMAGES.leave} onPress={() => setToken("")} />

         <Snackbar
            visible={snackbarVisible}
            onDismiss={dismissSnackbar}
            duration={3000}
            action={{
               label: 'Dismiss',
               textColor: 'white',
               onPress: dismissSnackbar,
            }}
            style={
               { backgroundColor: snackMode == 1 ? 'red' : 'green' }
            }
         >
            <Text style={{ color: 'white' }}>{
               snackMode == 0 ? 'Successfully joined court!' : 'Failed to join court.'
            }</Text>
         </Snackbar>
      </View>
   )
}

export default MainPage