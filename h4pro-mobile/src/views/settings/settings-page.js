import React from "react";
import { View } from "react-native";
import { MyStatusBar } from "../../components/status-bar";
import styles from "../../styles/settings-page.style";
import { SettingsHeader } from "../../components/settings-header";
import { AppButton } from "../../components/app-button";

import { SettingsEntry } from "../../components/settings-entry";

const SettingsPage = ({ navigation }) => {
  const handleOk = () => {
    navigation.navigate('Root', { screen: 'Home', params: { snackbar: false, snackmode: 0 } })
  };

  const handleLanguage = () => {
    navigation.navigate("LanguagePage");
  };

  const handleAbout = () => {
    navigation.navigate("AboutPage");
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
        <View style={{ alignItems: "center", gap: 95 }}>
          <SettingsHeader text="SETTINGS" />
          <View style={{ gap: 20 }}>
            <SettingsEntry text="LANGUAGE" onPress={handleLanguage} />
            <SettingsEntry text="ABOUT" onPress={handleAbout} />
          </View>
        </View>
        <AppButton text="OK" onPress={handleOk} />
      </View>
    </View>
  );
};

export { SettingsPage };
