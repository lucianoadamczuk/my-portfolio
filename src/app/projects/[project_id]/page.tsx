"use client";
import React from "react";
import { IconGithub, IconWeb } from "@/icons";
import { BoxText, GridWithImage } from "@/templates";
import { useParams } from "next/navigation";
import { myProjects } from "@/contents/projects/index";
import { Button, Pill } from "@/components/ui";

import { routes } from "@/configs";
import Link from "next/link";

export default function page(): React.ReactNode {
  const param = useParams();

  const projectFound = myProjects.find(
    (item) => item.name.replace(/\s+/g, "-").toLowerCase() === param.project_id,
  );

  console.log(projectFound);
  if (projectFound === undefined) {
    return (
      <article className=" w-full h-screen container flex flex-col justify-center items-center gap-5 ">
        <BoxText
          subtitle={`There is no matches for ${param.project_id.toString()} `}
          title="Error searching"
          text="Why do you not try with other project or URL?"
        />

        <Button href={routes.projects.path}>Go back</Button>
      </article>
    );
  }

  return (
    <GridWithImage src={projectFound.image} alt="An image of the project">
      <article className=" px-5 py-10 backdrop-blur-md rounded-lg">
        <h5 className=" font-bold text-2xl"> {projectFound.name} </h5>
        <p> {projectFound.description} </p>

        {/* pills with technologies */}
        <div className=" my-5 flex flex-wrap gap-5">
          {projectFound.technologies?.map((technology) => (
            <Pill key={technology}> {technology} </Pill>
          ))}
        </div>

        {/* icons */}
        <div className=" flex justify-end gap-5">
          <Link href={projectFound.github} target="_blank">
            <IconGithub />
          </Link>
          <Link href={projectFound.website} target="_blank">
            <IconWeb />
          </Link>
        </div>
      </article>
    </GridWithImage>
  );
}
