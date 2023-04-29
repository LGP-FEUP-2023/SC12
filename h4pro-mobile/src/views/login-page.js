import styles from '../styles/login-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import FormTextInput from '../components/form-text-input';
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
          <View style={{ flex: 1, alignItems: 'center', gap: 22 }}>
            <View style={styles.formTextContainer}>
              <Image source={IMAGES.user} />
              <FormTextInput placeholder="USERNAME OR EMAIL" />
            </View>
            <View style={styles.formTextContainer}>
              <Image source={IMAGES.password} />
              <FormTextInput placeholder="PASSWORD" hide={true} />
            </View>
            <Text style={styles.linkBlue}>FORGOT YOUR PASSWORD?</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', gap: 17 }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </View>
            <Text style={styles.linkWhite}>OR SIGN UP INSTEAD</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default LoginPage
