import { useTranslation } from "react-i18next";
import { Text } from "../../components";
import styles from "./LanguageSwitcher.module.css";
interface Props {}
export default function LanguageSwitcher({}: Props) {
  const languages = ["en", "es"];
  const { i18n } = useTranslation();
  return (
    <div className={styles.languageSwitcher}>
      {languages.map((lang) => (
        <div key={lang} onClick={() => i18n.changeLanguage(lang)}>
          <Text
            Tag="span"
            text={lang}
            uppercase
            color={i18n.resolvedLanguage === lang ? "secondary" : "gray"}
          />
        </div>
      ))}
    </div>
  );
}
