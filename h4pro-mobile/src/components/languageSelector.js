import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image } from 'react-native';
import styles from '../styles/main-page.style'
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Portugês' }
];

export const Selector = () => {
    const { i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;

    const setLanguage = code => {
        return i18n.changeLanguage(code);
    };

    return (
        <View style={styles.container}>
            <Text>Teste</Text>
            <View style={styles.row}>
                <Text style={styles.title}>Select a Language</Text>
            </View>
            {LANGUAGES.map(language => {
                const selectedLanguage = language.code === selectedLanguageCode;

                return (
                    <Pressable
                        key={language.code}
                        style={styles.buttonContainer}
                        disabled={selectedLanguage}
                        onPress={() => setLanguage(language.code)}
                    >
                        <Text
                            style={[selectedLanguage ? styles.selectedText : styles.text]}
                        >
                            {language.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

