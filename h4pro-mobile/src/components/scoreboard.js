import { COLOR } from '../constants/colors'
import styles from '../styles/main-page.style'
import React from 'react';
import { SafeAreaView, Text } from 'react-native'

export const MyScoreBoard = () => (
    <SafeAreaView style={styles.scoreboard}>
        <Text style={{color: 'white'}}>ScoreBoard</Text>
    </SafeAreaView>
);