import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';

import en from './translations/en/en.json';
import pt from './translations/pt/pt.json';
import hr from './translations/hr/hr.json'

// const LANGUAGES = {
//     en,
//     pt
// };

// const LANGUAGE_DETECTOR = {
//     type: 'languageDetector',
//     async: true,
//     detect: callback => {
//         AsyncStorage.getItem('user-language', (err, language) => {
//             if (err || !language) {
//                 if (err) {
//                     console.log('Error fetching Languages from asyncstorage ', err);
//                 } else {
//                     console.log('No language is set, choosing English as fallback');
//                 }
//                 // const findBestAvailableLanguage = RNLocalize.findBestAvailableLanguage(LANG_CODES);

//                 const findBestAvailableLanguage = 'pt';
//                 console.log(findBestAvailableLanguage);
//                 callback(findBestAvailableLanguage || 'en');
//                 return;
//             }
//             callback(language);
//         });
//     },
//     init: () => { },
//     cacheUserLanguage: language => {
//         AsyncStorage.setItem('user-language', language);
//     }
// };


function getSysLanguage() {
    const locales = getLocales()[0];
    console.log(locales['languageCode']);
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
