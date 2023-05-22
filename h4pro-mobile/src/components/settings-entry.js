import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "../styles/settings-page.style";
import { IMAGES } from "../constants/images";
import { useTranslation } from "react-i18next";

export const SettingsEntry = ({ text, onPress }) => {
  const { t } = useTranslation();

  return (
    <Pressable onPress={onPress}>
      <View style={styles.entry}>
        <Text style={styles.entryText}>{t(text)}</Text>
        <Image source={IMAGES.chevron} />
      </View>
    </Pressable>
  );
};
