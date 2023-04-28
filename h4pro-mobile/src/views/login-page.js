import styles from '../styles/main-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text } from 'react-native'

class LoginPage extends Component {
  render() {
    return (

      <View style={styles.container}>
        <MyStatusBar />
        <View
          style={[
            styles.container,
            {
              flexDirection: 'column',
            },
          ]}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.logoBig}
              source={IMAGES.logo}
            />

          </View>
          <View style={{ flex: 1, backgroundColor: 'darkorange' }}>
            <Text>
              {"Form goes here"}
            </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'green' }}>
            <Text>
              {"Button goes here"}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default LoginPage
