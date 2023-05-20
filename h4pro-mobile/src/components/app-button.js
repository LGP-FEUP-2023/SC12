import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors'

export const AppButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.gray,
    width: 163,
    height: 47,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
