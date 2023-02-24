import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './english.json';
import hi from './hindi.json';
import ma from './marathi.json';
import fr from './fr.json';
import ger from './ger.json';

i18n.use(initReactI18next).init({
    compatibilityJSON:'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    English: en,
    Hindi: hi,
    Marathi: ma,
    German: ger,
    French: fr
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;