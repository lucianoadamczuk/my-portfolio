import { useTranslation } from "react-i18next";
import { TextSpinner, TitleBox } from "../components";

import { Main } from "../layouts";

export default function Home() {
  const { t } = useTranslation("translation");
  const translation = {
    pageName: t("pageHome.pageName"),
    phrase: t("pageHome.phrase"),
    title: t("pageHome.title"),
    subtitle: t("pageHome.subtitle"),
    paragraph: t("pageHome.paragraph"),
    src: "/assets/home.jpg",
    alt: t("pageHome.alt"),
  };
  return (
    <Main
      pageName={translation.pageName}
      src={translation.src}
      alt={translation.alt}
    >
      <TextSpinner phrase={translation.phrase} />

      <TitleBox subtitle={translation.subtitle} title={translation.title} />
    </Main>
  );
}
