import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from '../assets/locales/en';
import fr from '../assets/locales/fr';

export const defaultNS = 'en';
export const resources = {
  en: {
    en,
  },
  fr: {
    fr,
  },
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: require('../assets/locales/en').default,
    },
    fr: {
      translation: require('../assets/locales/fr').default,
    },
  },
});

export default i18n;
