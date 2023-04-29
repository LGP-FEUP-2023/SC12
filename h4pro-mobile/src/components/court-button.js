import styles from '../styles/main-page.style'
import React from 'react'
import { SafeAreaView, Text, Image } from 'react-native'
import i18n from '../constants/localizer'
import { useTranslation } from 'react-i18next';


const CourtButton = props => {

    const { t } = useTranslation();
    console.log(t(props.text));
    console.log(i18n.t(props.text))
    console.log(i18n);
    return (
        <SafeAreaView style={[styles.courtButton, styles.basicButton]}>
            <Image style={styles.buttonIcon}
                source={props.icon} />
            <Text style={styles.buttonText}>{t(props.text)}</Text>
        </SafeAreaView>

    );


};

export default CourtButton;