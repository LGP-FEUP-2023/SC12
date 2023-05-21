import styles, { ICON_SIZE } from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component, useContext, useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { CourtButton } from '../components/court-button'
import { Snackbar } from 'react-native-paper'
import { COLOR } from '../constants/colors'
import AuthContext from '../../AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import "../constants/localizer"
import useBLE from "../../useBLE"
import { ConnectedSmartwatch } from '../components/connected-smartwatch'

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

   const {
      requestPermissions,
      scanForPeripherals,
      connectToDevice,
      allDevices,
      connectedDevice,
      disconnectFromDevice
   } = useBLE();

   const dismissSnackbar = () => {
      setSnackbarVisible(false);
   };

   const getWatchName = () => {
      scanForPeripherals();
      // if (connectedDevice != null) {
      //    return connectedDevice.name;
      // }
      // return "No watch connected";

      if (allDevices.length > 0 ){
         return allDevices[0].name;
      }
      return "No watch connected";
   }


   return (
      <View style={styles.container}>
         <MyStatusBar />
         <Image style={styles.logo}
            source={IMAGES.logo}
         />
          <ConnectedSmartwatch text={getWatchName()}/>
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


         >
            <View style={styles.snackbar}>
               {snackMode == 0 ? (
                  <>
                     <Icon name={'check-circle-outline'} color={COLOR.blue} size={ICON_SIZE} />
                     <Text style={styles.snackbartext}>
                        Successfully <Text style={{ color: COLOR.blue }}>joined</Text> court.
                     </Text>
                  </>
               ) : (
                  <>
                     <Icon name={'close-circle-outline'} color={COLOR.red} size={ICON_SIZE} />
                     <Text style={styles.snackbartext}>
                        <Text style={{ color: COLOR.red }}>Failed</Text> to join court.
                     </Text>
                  </>
               )}
            </View>

         </Snackbar >
      </View >
   )
}

export default MainPage
