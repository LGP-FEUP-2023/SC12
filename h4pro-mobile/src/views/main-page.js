import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import React, { Component } from 'react'
import { View, Image } from 'react-native'

class MainPage extends Component {
   render() {
      return (
        <View style={styles.container}>
            <MyStatusBar/>
            <View style={styles.content}>
                <Image style={styles.logo}
                    source={IMAGES.logo}
                />
            </View>
        </View>
      )
   }
}

export default MainPage