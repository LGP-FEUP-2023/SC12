import React from "react";
import { View, Image, Text } from "react-native";
import { MyStatusBar } from "../../components/status-bar";
import styles from "../../styles/settings-page.style";
import { SettingsHeader } from "../../components/settings-header";
import { AppButton } from "../../components/app-button";
import { ABOUT_TEXT } from "../../constants/text";
import { useTranslation } from "react-i18next";
import { StackActions } from '@react-navigation/native';

const AboutPage = ({ navigation }) => {
  const { t } = useTranslation();
  const handleOk = () => {
    navigation.dispatch(StackActions.pop())
  };

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 100,
          flex: 1,
        }}
      >
        <View style={{ alignItems: "center", gap: 20 }}>
          <View style={{ alignItems: "center" }}>
            <SettingsHeader text="ABOUT" />
          </View>
          <Text style={styles.aboutText}>{t("ABOUT_TEXT")}</Text>
        </View>
        <AppButton text="OK" onPress={handleOk} />
      </View>
    </View>
  );
};

export { AboutPage };
