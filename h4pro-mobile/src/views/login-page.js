import styles from '../styles/login-page.style'
import { IMAGES } from '../constants/images'
import { MyStatusBar } from '../components/status-bar'
import FormTextInput from '../components/form-text-input';
import React, { Component } from 'react'
import { View, Image, Pressable } from 'react-native'
import { Text } from 'react-native'

class LoginPage extends Component {

  handleSubmit() {
    console.log("Submitting form")
  }

  redirectSignUp() {
    console.log("Signup")
  }

  redirectForgotPassword() {
    console.log("Forgot")
  }

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
            <Pressable onPress={this.redirectForgotPassword}>
              <Text style={styles.linkBlue}>FORGOT YOUR PASSWORD?</Text>
            </Pressable>
          </View>
          <View style={{ flex: 1, alignItems: 'center', gap: 17 }}>
            <Pressable style={styles.button} onPress={this.handleSubmit} >
              <Text style={styles.buttonText}>SIGN IN</Text>
            </Pressable>
            <Pressable onPress={this.redirectSignUp}>
              <Text style={styles.linkWhite}>OR SIGN UP INSTEAD</Text>
            </Pressable>
          </View>
        </View>
      </View>
    )
  }
}

export default LoginPage
