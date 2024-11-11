import { useTranslation } from "react-i18next";
import { ContactBox, Icon, TitleBox } from "../../components";
import { personalInformation } from "../../data/personalInformation";
import { Main, Scroll } from "../../layouts";
import styles from "./PageContact.module.css";

export default function Contact() {
  const { t } = useTranslation("translation", { keyPrefix: "pageContact" });
  const translation = {
    pageName: t("pageName"),
    title: t("title"),
    subtitle: t("subtitle"),
    src: "/assets/contact.jpg",
    alt: t("alt"),
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
          {/* -------------------------------- location -------------------------------- */}
          <ContactBox
            icon={<Icon as="location" />}
            text="Buenos Aires, Argentina"
          />
          {/* ---------------------------------- email --------------------------------- */}
          <ContactBox
            href={`mailto:${personalInformation.email}`}
            icon={<Icon as="email" hover />}
            text={personalInformation.email}
          />
          {/* ---------------------------------- phone --------------------------------- */}
          <ContactBox
            href={`https://api.whatsapp.com/send?phone=${personalInformation.phone.replace(/[\s+]/g, "")}`}
            icon={<Icon as="phone" hover />}
            text={personalInformation.phone}
          />
          {/* ------------------------------ social media ------------------------------ */}
          <div className={styles.socialMediaContainer}>
            <ContactBox
              href={personalInformation.github}
              icon={<Icon as="github" hover />}
            />
            <ContactBox
              href={personalInformation.linkedIn}
              icon={<Icon as="linkedIn" hover />}
            />
          </div>
        </article>
      </Scroll>
    </Main>
  );
}
