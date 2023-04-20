import styles from '../styles/main-page.style'
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native'

export const CourtButton = ({ text, icon, onPress }) => (
    <TouchableOpacity
        activeOpacity={0.8} // set the opacity when pressed
        style={[styles.courtButton, styles.basicButton]}
        onPress={onPress}
    >
        <Image style={styles.buttonIcon}
            source={icon} />
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);