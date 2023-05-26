import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { IMAGES } from "../constants/images";
import { COLOR } from "../constants/colors";

import { useTranslation } from "react-i18next";

export const LanguageEntry = ({ flag, text, onPress, selected }) => {
  const { t } = useTranslation();

  return (
    <Pressable onPress={onPress}>
      <View style={styles.entry}>
        <View style={styles.language}>
          <Image source={flag} />
          <Text style={styles.entryText}>{t(text)}</Text>
        </View>
        {selected && <Image source={IMAGES.check} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  entry: {
    borderBottomWidth: 1,
    borderColor: COLOR.midGray,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  entryText: {
    color: COLOR.white,
    fontSize: 16,
    fontWeight: "600",
  },
  language: {
    flexDirection: "row",
    gap: 10,
  },
});
