import React, { type ReactElement } from "react";

interface Props {
  subtitle: string;
  title: string;
  text: string;
}

export default function BoxText({
  subtitle,
  title,
  text,
}: Props): ReactElement {
  return (
    <div>
      <h5 className=" text-2xl tracking-widest"> {subtitle} </h5>
      <h3 className=" text-6xl ">{title} </h3>
      <p> {text} </p>
    </div>
  );
}
