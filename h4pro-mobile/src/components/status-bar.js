import { COLOR } from '../constants/colors'
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native'

export const MyStatusBar = () => (
    <SafeAreaView>
        <StatusBar backgroundColor={COLOR.background}/>
    </SafeAreaView>
);