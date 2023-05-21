import styles from '../styles/main-page.style'
import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native'

export const ConnectedSmartwatch = ({text}) => (
    <SafeAreaView style={styles.connected}>
        {/* <Image style={styles.swIcon}
                source={icon}/> */}
        <Text style={styles.swText}>{text}</Text>
    </SafeAreaView>
);