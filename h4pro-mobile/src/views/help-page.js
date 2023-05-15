import styles from '../styles/help-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { CourtButton } from '../components/court-button'

class HelpPage extends Component{

    render(){
        return(
            <View>
                <Image source={IMAGES.help}/>
            </View>
        )
    }
}

export default HelpPage