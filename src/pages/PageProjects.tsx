import { useTranslation } from "react-i18next";
import { Main, Scroll } from "../layouts";
import { ProjectBox, TitleBox } from "../components";

export default function PageProjects() {
  const { t } = useTranslation("translation");
  const translation = {
    pageName: t("pageProjects.pageName"),
    title: t("pageProjects.title"),
    subtitle: t("pageProjects.subtitle"),
    src: "/assets/projects.jpg",
    alt: t("pageProjects.alt"),
    projects: t("projects", { returnObjects: true }),
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

        {translation.projects.map(({ slug, title, description }) => (
          <ProjectBox
            key={slug}
            slug={slug}
            title={title}
            description={description}
          />
        ))}
      </Scroll>
    </Main>
  );
}
