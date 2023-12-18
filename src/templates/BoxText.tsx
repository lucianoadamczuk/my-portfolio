import React, { type ReactElement } from "react";

interface Props {
  subtitle: string;
  title: string;
}

export default function BoxText({ subtitle, title }: Props): ReactElement {
  return (
    <div className="w-full text-center lg:text-start">
      <h5 className=" text-sm tracking-widest"> {subtitle} </h5>
      <h3 className=" font-bold text-6xl text-primary">{title} </h3>
    </div>
  );
}
