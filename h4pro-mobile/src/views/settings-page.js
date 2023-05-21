import React from "react";
import { View, Image, Text } from "react-native";
import { IMAGES } from "../constants/images";
import { MyStatusBar } from "../components/status-bar";
import styles from "../styles/settings-page.style";
import { SettingsHeader } from "../components/settings-header";
import { AppButton } from "../components/app-button";

import { COLOR } from "../constants/colors";
import { SettingsEntry } from "../components/settings-entry";

const SettingsPage = ({ navigation }) => {
  const handleOk = () => {
    console.log("OK");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <View style={{ alignItems: "center", gap: 250 }}>
        <View style={{ alignItems: "center", gap: 95 }}>
          <SettingsHeader text="SETTINGS" />
          <View style={{ gap: 20 }}>
            <SettingsEntry text="LANGUAGE" />
            <SettingsEntry text="ABOUT" />
          </View>
        </View>
        <AppButton text="OK" onPress={handleOk} />
      </View>
    </View>
  );
};

export { SettingsPage };
