import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translations/en/global.json';
import es from './translations/es/global.json';

export const languageResources = {
    es: {translation: es},
    en: {translation: en},
};


i18next.use(initReactI18next).init({
    compatibilityJSON:"v3",
    lng: "en",
    fallbackLng: "en",
    resources: languageResources,
});

export default i18next;