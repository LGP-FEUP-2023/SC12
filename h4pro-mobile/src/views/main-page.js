import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { CourtButton } from '../components/court-button'
import ble from '../services/ble'

const MainPage = () => {
   const {
      requestPermissions,
      scanForPeripherals,
      allDevices,
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
   };

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
         <MyScoreBoard/>
         <CourtButton text={"join court"} icon={IMAGES.join} press={joinPressed}/>
         <CourtButton text={"leave court"} icon={IMAGES.leave} press={leavePressed}/>
         <TouchableOpacity onPress={openModal}>
            <Text style={{color: 'white'}}>{"Connect"}</Text>
         </TouchableOpacity>
      </View>
   )
};

export default MainPage
