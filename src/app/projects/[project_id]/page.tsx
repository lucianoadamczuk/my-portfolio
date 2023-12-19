"use client";
import React from "react";
import { IconGithub, IconWeb } from "@/icons";
import { BoxText, GridWithImage } from "@/templates";
import { useParams } from "next/navigation";
import { myProjects } from "@/contents/projects/index";
import { Button, Pill } from "@/components/ui";
import { routes } from "@/configs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function page(): React.ReactNode {
  const param = useParams();

  const projectFound = myProjects.find(
    (item) => item.name.replace(/\s+/g, "-").toLowerCase() === param.project_id,
  );

  if (projectFound === undefined) {
    return (
      <article className=" w-full h-screen container flex flex-col justify-center items-center gap-5 ">
        <BoxText
          subtitle={`There is no matches for ${param.project_id.toString()} `}
          title="Error searching"
        />

        <Button href={routes.projects.path}>Go back</Button>
      </article>
    );
  }

  return (
    <GridWithImage
      src={projectFound.image}
      alt="A representative image of the project"
    >
      <article className="text-center lg:text-start">
        <h5 className=" font-bold text-3xl"> {projectFound.name} </h5>
        <p> {projectFound.description} </p>

        {/* pills with technologies */}
        <div className=" my-5 flex flex-wrap justify-center gap-5">
          {projectFound.technologies?.map((technology, index) => (
            <motion.div
              key={technology}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Pill> {technology} </Pill>
            </motion.div>
          ))}
        </div>

        {/* icons */}
        <div className=" mt-16 flex justify-center gap-10">
          <Link
            href={projectFound.github}
            target="_blank"
            className=" hover:scale-110"
          >
            <IconGithub />
          </Link>
          <Link
            href={projectFound.website}
            target="_blank"
            className=" hover:scale-110"
          >
            <IconWeb />
          </Link>
        </div>
      </article>
    </GridWithImage>
  );
}
