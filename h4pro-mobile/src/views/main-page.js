import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { CourtButton } from '../components/court-button'

class MainPage extends Component {
   joinPressed() {
      console.log("join pressed")
   }

   leavePressed() {
      console.log("leave pressed")
   }

   render() {
      return (
        <View style={styles.container}>
            <MyStatusBar/>
            <Image style={styles.logo}
                    source={IMAGES.logo}
            />
            <MyScoreBoard/>
            <CourtButton text={"join court"} icon={IMAGES.join} press={this.joinPressed}/>
            <CourtButton text={"leave court"} icon={IMAGES.leave} press={this.leavePressed}/>
        </View>
      )
   }
}

export default MainPage