import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from './translations/en/en.json';
import pt from './translations/pt/pt.json';
import hr from './translations/hr/hr.json'




function getSysLanguage() {
    const locales = getLocales()[0];
    return locales['languageCode'];
}

i18n
    .use(initReactI18next).init({
        compatibilityJSON: 'v3',
        lng: getSysLanguage(),
        fallbackLng: 'pt',
        resources: {
            en: en,
            pt: pt,
            hr: hr,
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
