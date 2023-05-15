import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { CourtButton } from '../components/court-button'

class MainPage extends Component {
   joinPressed() {
      console.log("join pressed")
   }

   leavePressed() {
      console.log("leave pressed")
   }

   helpPagePressed(){
      console.log("help page pressed");
   }

   render() {
      return (
        <View style={styles.container}>
            <MyStatusBar/>
            <Image style={styles.logo}
                    source={IMAGES.logo}
            />
            <View>
               <TouchableOpacity onPress={this.helpPagePressed}>
                  <Image style={styles.help}
                        source={IMAGES.help}
                  />
               </TouchableOpacity>
            </View>
            <MyScoreBoard/>
            <CourtButton text={"join court"} icon={IMAGES.join} press={this.joinPressed}/>
            <CourtButton text={"leave court"} icon={IMAGES.leave} press={this.leavePressed}/>
        </View>
      )
   }
}

export default MainPage