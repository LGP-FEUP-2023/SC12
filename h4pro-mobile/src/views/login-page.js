import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Pressable,
  Text,
  Alert,
  Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { IMAGES } from "../constants/images";
import { MyStatusBar } from "../components/status-bar";
import styles from "../styles/login-page.style";
import { useTranslation } from "react-i18next";

import { COLOR } from "../constants/colors";
export default function LoginPage({ navigation }) {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log("Submitting form", data);
    // navigation.navigate('MainPage');
    navigation.reset({
      index: 0,
      routes: [{ name: "MainPage" }],
    });
  };

  const onError = (errors) => {
    console.log(errors);
    Keyboard.dismiss();
  };

  const redirectSignUp = () => {
    Alert.alert("TODO", "Redirect to MOG's sign up page");
  };

  const redirectForgotPassword = () => {
    Alert.alert("TODO", "Redirect to MOG's forgot password page");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={styles.container}
    >
      <MyStatusBar />
      <View style={[styles.container, { flexDirection: "column" }]}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image style={styles.logoBig} source={IMAGES.logo} />
        </View>
        <View style={{ flex: 1, alignItems: "center", gap: 22 }}>
          <View
            style={[
              styles.formTextContainer,
              errors.email && styles.formTextContainerError,
            ]}
          >
            <Image source={IMAGES.user} />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.formTextInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onSubmitEditing={Keyboard.dismiss}
                  value={value}
                  placeholder={t("EMAIL")}
                  placeholderTextColor={COLOR.lightGray}
                  autoCapitalize="none"
                />
              )}
              name="email"
              defaultValue=""
            />
          </View>
          <View
            style={[
              styles.formTextContainer,
              errors.password && styles.formTextContainerError,
            ]}
          >
            <Image source={IMAGES.password} />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.formTextInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onSubmitEditing={Keyboard.dismiss}
                  value={value}
                  placeholder={t("PASSWORD")}
                  placeholderTextColor={COLOR.lightGray}
                  secureTextEntry={true}
                />
              )}
              name="password"
              defaultValue=""
            />
          </View>

          <View style={{ alignItems: "center" }}>
            {(errors.email || errors.password) && (
              <Text style={{ color: COLOR.orange }}>
                {t("These fields are required.")}
              </Text>
            )}
          </View>

          <Pressable onPress={redirectForgotPassword}>
            <Text style={styles.linkBlue}>{t("FORGOT YOUR PASSWORD?")}</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, alignItems: "center", gap: 17 }}>
          <Pressable
            style={styles.button}
            onPress={handleSubmit(onSubmit, onError)}
          >
            <Text style={styles.buttonText}>{t("SIGN IN")}</Text>
          </Pressable>
          <Pressable onPress={redirectSignUp}>
            <Text style={styles.linkWhite}>{t("OR SIGN UP INSTEAD")}</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
