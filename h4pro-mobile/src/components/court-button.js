import styles from '../styles/main-page.style'
import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native'

export const CourtButton = ({text, icon}) => (
    <SafeAreaView style={[styles.courtButton, styles.basicButton]}>
        <Image style={styles.buttonIcon}
                source={icon}/>
        <Text style={styles.buttonText}>{text}</Text>
    </SafeAreaView>
);