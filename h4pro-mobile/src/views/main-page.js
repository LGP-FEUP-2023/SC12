import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import CourtButton from '../components/court-button'
import "../constants/localizer"

class MainPage extends Component {
   render() {
      return (
         <View style={styles.container}>
            <MyStatusBar />
            <Image style={styles.logo}
               source={IMAGES.logo}
            />
            <MyScoreBoard />
            <CourtButton text="Join Court" icon={IMAGES.join} />
            <CourtButton text="Leave Court" icon={IMAGES.leave} />
         </View>
      )
   }
}

export default MainPage
