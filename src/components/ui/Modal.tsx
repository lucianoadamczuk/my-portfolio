import { IconGithub, IconWeb } from "@/icons";
import React from "react";
import { Pill } from ".";
interface Props {
  title: string;
  description: string;
  technologies: string[];
}
export default function Modal({
  title,
  description,
  technologies,
}: Props): React.ReactElement {
  return (
    <article className=" p-5 bg-gray rounded-lg">
      <h5 className=" text-xl"> {title} </h5>
      <p>{description}</p>
      <div className=" my-5 flex flex-wrap gap-5">
        {technologies?.map((technology) => (
          <Pill key={technology}> {technology} </Pill>
        ))}
      </div>

      <div className=" flex gap-5">
        <IconGithub />
        <IconWeb />
      </div>
    </article>
  );
}
