import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { IMAGES } from "../../constants/images";
import { MyStatusBar } from "../../components/status-bar";
import styles from "../../styles/settings-page.style";
import { SettingsHeader } from "../../components/settings-header";
import { AppButton } from "../../components/app-button";

import { COLOR } from "../../constants/colors";
import { SettingsEntry } from "../../components/settings-entry";
import { LanguageEntry } from "../../components/language-entry";

const LanguagePage = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleOk = () => {
    console.log("OK");
    navigation.goBack();
  };

  const changeLanguage = (language) => {
    console.log(language);
    setSelectedLanguage(language);
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
            flag={IMAGES.hz}
            text={"CROATIAN"}
            selected={selectedLanguage === "hz"}
            onPress={() => changeLanguage("hz")}
          />
          <LanguageEntry
            flag={IMAGES.en}
            text={"ENGLISH"}
            selected={selectedLanguage === "en"}
            onPress={() => changeLanguage("en")}
          />
          <LanguageEntry
            flag={IMAGES.pt}
            text={"PORTUGUESE"}
            selected={selectedLanguage === "pt"}
            onPress={() => changeLanguage("pt")}
          />
        </View>
        <AppButton text="OK" onPress={handleOk} />
      </View>
    </View>
  );
};

export { LanguagePage };
