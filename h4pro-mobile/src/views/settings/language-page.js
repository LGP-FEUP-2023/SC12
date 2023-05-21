import React, { useState } from "react";
import { View, Image, Text} from "react-native";
import { IMAGES } from "../../constants/images";
import { MyStatusBar } from "../../components/status-bar";
import styles from "../../styles/settings-page.style";
import { SettingsHeader } from "../../components/settings-header";
import { AppButton } from "../../components/app-button";
import { useTranslation } from "react-i18next";
import { COLOR } from "../../constants/colors";
import { SettingsEntry } from "../../components/settings-entry";
import { LanguageEntry } from "../../components/language-entry";


const LanguagePage = ({ navigation }) => {

  const { i18n } = useTranslation();



  const handleOk = () => {
    console.log("OK");
    navigation.goBack();
  };

  const changeLanguage = (language) => {
    console.log(language);
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <View style={{ alignItems: "center", gap: 150 }}>
        <View style={{ alignItems: "center", gap: 95 }}>
          <SettingsHeader text="LANGUAGE" />
        </View>
        <View style={{ gap: 10 }}>
          <LanguageEntry
            flag={IMAGES.hr}
            text={"CROATIAN"}
            selected={i18n.language === "hr"}
            onPress={() => changeLanguage("hr")}
          />
          <LanguageEntry
            flag={IMAGES.en}
            text={"ENGLISH"}
            selected={i18n.language === "en"}
            onPress={() => changeLanguage("en")}
          />
          <LanguageEntry
            flag={IMAGES.pt}
            text={"PORTUGUESE"}
            selected={i18n.language === "pt"}
            onPress={() => changeLanguage("pt")}
          />
        </View>
        <AppButton text="OK" onPress={handleOk} />
      </View>
    </View>
  );
};

export { LanguagePage };
