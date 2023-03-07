import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEnglish from "./localization/english/translation.json";
import translationSerbian from "./localization/serbian/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "sr",
    fallbackLng: "sr",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEnglish,
      },
      sr: {
        translations: translationSerbian,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
