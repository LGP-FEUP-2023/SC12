import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/settings-page.style";
import { IMAGES } from "../constants/images";
import { useTranslation } from "react-i18next";

export const SettingsHeader = ({ text }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <Image source={IMAGES.logo} style={styles.logo} />
      <Text style={styles.headerText}>{t(text)}</Text>
    </View>
  );
};
