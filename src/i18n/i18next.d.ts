import "i18next";
import translation from "../../public/locales/es/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof translation;
    };
  }
}
