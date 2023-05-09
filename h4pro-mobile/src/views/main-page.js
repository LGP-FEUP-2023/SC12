import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { CourtButton } from '../components/court-button'
import { ConnectedSmartwatch } from '../components/connected-smartwatch'
import { STRINGS } from '../constants/strings'
import ble from '../services/ble'

const MainPage = () => {
   // bluetooth stuff
   const {
      requestPermissions,
      scanForPeripherals,
      connectToDevice,
      allDevices,
      connectedDevice,
      disconnectFromDevice
   } = ble();
   const [isModalVisible, setIsModalVisible] = useState(false);
   const scanForDevices = async () => {
      const isPermissionsEnabled = await requestPermissions();
      if (isPermissionsEnabled) {
         scanForPeripherals();
      }
   };
   const openModal = async () => {
      scanForDevices();
      setIsModalVisible(true);
      checkSmartwatch();
   };

   // connected smartwatch
   state = {
      isConnected: false,
      watchName: STRINGS.noWatch
   };
   const checkSmartwatch = () => {
      if(connectedDevice) {
         state = true
         state.watchName = connectedDevice.name
      }
   }

   // court buttons
   const joinPressed = () => {
      console.log("join pressed")
   }
   const leavePressed = () => {
      console.log("leave pressed")
   }

   return (
      <View style={styles.container}>
         <MyStatusBar/>
         <Image style={styles.logo}
               source={IMAGES.logo}
         />
         <ConnectedSmartwatch text={state.watchName}
               icon={state.isConnected ? IMAGES.smartwatch : IMAGES.noWatch}/>
         <MyScoreBoard/>
         <CourtButton text={STRINGS.join} icon={IMAGES.join} press={joinPressed}/>
         <CourtButton text={STRINGS.leave} icon={IMAGES.leave} press={leavePressed}/>
         <TouchableOpacity onPress={openModal}>
            <Text style={{color: 'white'}}>{"Ask permission"}</Text>
         </TouchableOpacity>
      </View>
   )
};

export default MainPage
