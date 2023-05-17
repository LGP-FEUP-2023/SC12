import styles from '../styles/main-page.style'
import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import i18n from '../constants/localizer'
import { useTranslation } from 'react-i18next';


export const CourtButton = props => {

    const { t } = useTranslation();

    return (

        <TouchableOpacity style={[styles.courtButton, styles.basicButton]}
            onPress={props.press}>
            <Image style={styles.buttonIcon} source={props.icon} />
            <Text style={styles.buttonText}>{t(props.text)}</Text>
        </TouchableOpacity>

    );
};

