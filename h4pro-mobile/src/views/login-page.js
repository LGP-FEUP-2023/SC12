
import React from 'react';
import { View, Image, TextInput, Pressable, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { IMAGES } from '../constants/images';
import { MyStatusBar } from '../components/status-bar';
import styles from '../styles/login-page.style';

import { COLOR } from '../constants/colors';
export default function LoginPage({navigation}) {
  const { control, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Submitting form', data);
    navigation.navigate('Dashboard')
  };

  const redirectSignUp = () => {
    Alert.alert("TODO", "Redirect to MOG's sign up page");
  };

  const redirectForgotPassword = () => {
    Alert.alert("TODO", "Redirect to MOG's forgot password page")
  };

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <View style={[styles.container, { flexDirection: 'column' }]}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.logoBig} source={IMAGES.logo} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', gap: 22 }}>
          <View style={styles.formTextContainer}>
            <Image source={IMAGES.user} />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.formTextInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="EMAIL"
                  placeholderTextColor={COLOR.lightGray}
                  autoCapitalize='none'
                />
              )}
              name="email"
              defaultValue=""
            />
            {errors.email && <Text style={{ color: COLOR.orange }} >This field is required.</Text>}
          </View>
          <View style={styles.formTextContainer}>
            <Image source={IMAGES.password} />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.formTextInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="PASSWORD"
                  placeholderTextColor={COLOR.lightGray}
                  secureTextEntry={true}
                />
              )}
              name="password"
              defaultValue=""
            />
            {errors.password && <Text style={{ color: COLOR.orange }}>This field is required.</Text>}
          </View>
          <Pressable onPress={redirectForgotPassword}>
            <Text style={styles.linkBlue}>FORGOT YOUR PASSWORD?</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, alignItems: 'center', gap: 17 }}>
          <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </Pressable>
          <Pressable onPress={redirectSignUp}>
            <Text style={styles.linkWhite}>OR SIGN UP INSTEAD</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

