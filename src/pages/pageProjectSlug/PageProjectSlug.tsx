import { useEffect, useState } from "react";

import styles from "./PageProjectSlug.module.css";
import { useTranslation } from "react-i18next";
import { Main, Modal, Scroll } from "../../layouts";
import { Icon, Pill, Text, TitleBox } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { projectsLinks } from "../../data/projectsLinks";
import { projectsTechnologies } from "../../data/projectsTechnologies";

export default function PageProjectSlug() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modaltranslation, setModaltranslation] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  const { t } = useTranslation("translation");

  const projects = t("projects", { returnObjects: true });
  const projectFound = projects.find((project) => project.slug === slug);

  useEffect(() => {
    if (!projectFound) {
      navigate("/error");
    }
  }, [navigate, projectFound]);

  if (projectFound) {
    /* ----------------- if the slug is found among the projects ---------------- */
    const translation = {
      pageName: projectFound.title,
      title: projectFound.title,
      subtitle: t("pageProjects/slug.subtitle"),
      description: projectFound.description,
      src: `/assets/projects/${projectFound?.slug}.jpg`,
      alt: t("pageProjects/slug.alt"),
      technologies: t("pageProjects/slug.technologies"),
    };

    //to find the github and web links for the project found
    const projectFoundLinks = projectsLinks.find(
      (project) => project.slug === projectFound.slug,
    );

    // to find the technologies for the project found
    const projectFoundTechnologies = projectsTechnologies.find(
      (project) => project.slug == projectFound.slug,
    );

    const technologiesDescriptions = t("technologiesDescriptions", {
      returnObjects: true,
    });

    return (
      <>
        <Main
          pageName={translation.pageName}
          src={translation.src}
          alt={translation.alt}
        >
          <Scroll>
            <article>
              <TitleBox
                subtitle={translation.subtitle}
                title={translation.title}
              />
              <Text Tag="p" text={translation.description} />

              {/* web and github links */}
              <div className={styles.linksContainer}>
                {projectFoundLinks?.web && (
                  <a href={projectFoundLinks.web} target="_blank">
                    <Icon as="web" hover />
                  </a>
                )}

                {projectFoundLinks?.github && (
                  <a href={projectFoundLinks?.github} target="_blank">
                    <Icon as="github" hover />
                  </a>
                )}
              </div>
            </article>

            {/* ------------------------- technologies container ------------------------- */}
            <article>
              <Text
                Tag="h3"
                size="lg"
                color="secondary"
                text={translation.technologies}
              />
              <div className={styles.pillsContainer}>
                {projectFoundTechnologies?.technologies?.map((tech) => (
                  <Pill
                    key={tech}
                    text={tech}
                    onClick={() => {
                      const data = technologiesDescriptions.find(
                        (description) => description.name === tech,
                      );
                      setModaltranslation({
                        title: data?.name || "",
                        description: data?.description || "",
                      });
                      setOpenModal(true);
                    }}
                  />
                ))}
              </div>
            </article>
          </Scroll>
        </Main>

        {/* ---------------------------------- modal --------------------------------- */}
        <Modal isOpen={openModal} onClick={() => setOpenModal(false)}>
          <Text
            Tag="h5"
            family="title"
            color="secondary"
            size="lg"
            text={modaltranslation.title}
          />
          <Text Tag="p" text={modaltranslation.description} />
        </Modal>
      </>
    );
  }
}
