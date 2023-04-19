import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import { MyScoreBoard } from '../components/scoreboard'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { CourtButton } from '../components/court-button'
import { ConnectedSmartwatch } from '../components/connected-smartwatch'
import { STRINGS } from '../constants/strings'

class MainPage extends Component {
   render() {
      return (
        <View style={styles.container}>
            <MyStatusBar/>
            <Image style={styles.logo}
                    source={IMAGES.logo}
            />
            <ConnectedSmartwatch text={"John's Smartwatch"} icon={IMAGES.smartwatch}/>
            <MyScoreBoard/>
            <CourtButton text={STRINGS.join} icon={IMAGES.join}/>
            <CourtButton text={STRINGS.leave} icon={IMAGES.leave}/>
        </View>
      )
   }
}

export default MainPage