import styles from '../styles/main-page.style'
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native'

export const CourtButton = ({text, icon, onPress}) => (
    <TouchableOpacity style={[styles.courtButton, styles.basicButton]}
                    onPress={onPress}>
        <Image style={styles.buttonIcon} source={icon}/>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);