"use client";
import React, { useContext } from "react";
import { List } from "@/components/ui";
import { myProjects } from "@/contents/projects";
import { BoxText, GridWithImage } from "@/templates";
import { ContextDevice } from "@/contexts";
import { PageNameAnimation } from "@/animations";
import { routes } from "@/configs";

export default function page(): React.ReactNode {
  const { device } = useContext(ContextDevice);
  const image = `/projects/${device}.webp`;

  return (
    <>
      <GridWithImage src={image} alt="Me posing in the street">
        <BoxText subtitle="Doing is learning" title="Projects" />

        <div className=" h-80 overflow-y-scroll">
          <List display={myProjects} />
        </div>
      </GridWithImage>
      <PageNameAnimation text={routes.projects.name} />
    </>
  );
}
