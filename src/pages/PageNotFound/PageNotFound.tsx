import { useTranslation } from "react-i18next";
import { Text } from "../../components";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  const { t } = useTranslation("translation");
  const translation = {
    title: t("pageNotFound.title"),
    paragraph: t("pageNotFound.paragraph", { returnObjects: true }),
    button: t("pageNotFound.button"),
  };
  return (
    <main className={styles.main}>
      <div>
        <Text
          Tag="h1"
          family="title"
          size="xl"
          color="primary"
          text={translation.title}
        />
        <Text Tag="p" color="dark" text={translation.paragraph} />
      </div>

      <Link to={`/`} className={styles.button}>
        {translation.button}
      </Link>
    </main>
  );
}
