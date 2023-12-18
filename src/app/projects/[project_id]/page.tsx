"use client";
import React from "react";
import { IconGithub, IconWeb } from "@/icons";
import { BoxText, GridWithImage } from "@/templates";
import { useParams } from "next/navigation";
import { myProjects } from "@/contents/projects/index";
import { Button } from "@/components/ui";
import { useRouter } from "next/router";
import { routes } from "@/configs";

export default function page(): React.ReactNode {
  const param = useParams();
  const router = useRouter();
  const projectFound = myProjects.find(
    (item) => item.name === param.project_id,
  );

  if (projectFound === undefined) {
    return (
      <article className=" w-full h-screen flex flex-col justify-center items-center gap-5 ">
        <BoxText
          subtitle="There is no matches"
          title="Error searching"
          text="Why do you not try with other project or URL?"
        />

        <Button href={routes}>Go back</Button>
      </article>
    );
  }

  return (
    <GridWithImage src={projectFound.image} alt="An image of the project">
      <article className=" p-5 bg-gray rounded-lg">
        <h5 className=" text-xl"> </h5>
        <p></p>
        {/* <div className=" my-5 flex flex-wrap gap-5">
        {technologies?.map((technology) => (
          <Pill key={technology}> {technology} </Pill>
        ))}
      </div> */}

        <div className=" flex gap-5">
          <IconGithub />
          <IconWeb />
        </div>
      </article>
    </GridWithImage>
  );
}
