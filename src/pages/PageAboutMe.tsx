import { useTranslation } from "react-i18next";
import { Text, TitleBox } from "../components";
import { Main, Scroll } from "../layouts";

export default function PageAboutMe() {
  const { t } = useTranslation("translation", { keyPrefix: "pageAboutMe" });

  const translation = {
    pageName: t("pageName"),
    title: t("title"),
    subtitle: t("subtitle"),
    src: "/assets/about-me.jpg",
    alt: t("alt"),
    description: {
      title: t("description.title"),
      paragraph: t("description.paragraph", { returnObjects: true }),
    },
    philosophy: {
      title: t("philosophy.title"),
      paragraph: t("philosophy.paragraph", { returnObjects: true }),
    },
    beyondTheCode: {
      title: t("beyondTheCode.title"),
      paragraph: t("beyondTheCode.paragraph", { returnObjects: true }),
    },
  };

  return (
    <Main
      pageName={translation.pageName}
      src={translation.src}
      alt={translation.alt}
    >
      <Scroll>
        <article>
          <TitleBox subtitle={translation.subtitle} title={translation.title} />
        </article>

        <article>
          <Text
            Tag="h3"
            size="lg"
            color="secondary"
            text={translation.description.title}
          />
          <Text Tag="p" text={translation.description.paragraph} />
        </article>

        <article>
          <Text
            Tag="h3"
            size="lg"
            color="secondary"
            text={translation.philosophy.title}
          />
          <Text Tag="p" text={translation.philosophy.paragraph} />
        </article>

        <article>
          <Text
            Tag="h3"
            size="lg"
            color="secondary"
            text={translation.beyondTheCode.title}
          />
          <Text Tag="p" text={translation.beyondTheCode.paragraph} />
        </article>
      </Scroll>
    </Main>
  );
}
