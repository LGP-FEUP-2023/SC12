import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "../styles/settings-page.style";
import { IMAGES } from "../constants/images";

export const SettingsEntry = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.entry}>
        <Text style={styles.entryText}>{text}</Text>
        <Image source={IMAGES.chevron} />
      </View>
    </Pressable>
  );
};
