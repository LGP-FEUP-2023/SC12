import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './translations/en/en.json';
import pt from './translations/pt/pt.json';

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


i18n
    .use(initReactI18next).init({
        compatibilityJSON: 'v3',
        lng: 'pt',
        fallbackLng: 'pt',
        resources: {
            en: en,
            pt: pt,
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
