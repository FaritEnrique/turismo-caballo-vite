import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus traducciones
import es from "./src/locales/es.json";
import en from "./src/locales/en.json";
import no from "./src/locales/no.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      es: es,
      no: no,
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "es",
    ns: ["header", "footer", "homepage", "location", "promociones", "contacto", "localidades", "festividades"],
    defaultNS: "homepage",
    interpolation: { escapeValue: false },
    debug: true,
  });

export default i18n;