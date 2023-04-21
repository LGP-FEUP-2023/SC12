import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { CourtButton } from '../components/court-button'

const MainPage = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <MyStatusBar />
         <Image style={styles.logo}
            source={IMAGES.logo}
         />
         <MyScoreBoard />
         <CourtButton text={"join court"} icon={IMAGES.join} onPress={() => navigation.navigate('SessionScanner')} />
         <CourtButton text={"leave court"} icon={IMAGES.leave} />
      </View>
   )
}

export default MainPage