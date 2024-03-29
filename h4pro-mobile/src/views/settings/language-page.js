import React from "react";
import { View } from "react-native";
import { IMAGES } from "../../constants/images";
import { MyStatusBar } from "../../components/status-bar";
import styles from "../../styles/settings-page.style";
import { SettingsHeader } from "../../components/settings-header";
import { AppButton } from "../../components/app-button";
import { useTranslation } from "react-i18next";
import { LanguageEntry } from "../../components/language-entry";
import { CommonActions } from '@react-navigation/native';


const LanguagePage = ({ navigation }) => {
  const { i18n } = useTranslation();

  const handleOk = () => {
    navigation.dispatch(CommonActions.goBack())
  };

  const changeLanguage = (language) => {
    navigation.dispatch(CommonActions.reset({
      index: 1,
      routes: [
        {
          name: 'Root',
          params: { screen: 'Home', params: { snackbar: false, snackmode: 0 } },
        },
      ],
    }));
    i18n.changeLanguage(language);
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
          <View style={{ alignItems: "center" }}>
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
        </View>
        <AppButton text="OK" onPress={handleOk} />
      </View>
    </View>
  );
};

export { LanguagePage };
