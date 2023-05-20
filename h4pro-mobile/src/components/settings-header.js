import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/settings-page.style";
import { IMAGES } from "../constants/images";

export const SettingsHeader = ({ text }) => {
    return (
      <View style={styles.header}>
        <Image source={IMAGES.logo} style={styles.logo} />
        <Text style={styles.headerText}>{text}</Text>
      </View>
    );
  };
  