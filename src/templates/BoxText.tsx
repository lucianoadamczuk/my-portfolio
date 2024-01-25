import React, { type ReactElement } from "react";

interface Props {
  subtitle: string;
  title: string;
}

export default function BoxText({ subtitle, title }: Props): ReactElement {
  return (
    <div className="w-full text-center ">
      <h5 className=" text-sm tracking-[5px] opacity-40"> {subtitle} </h5>
      <h3 className=" font-bold text-6xl">{title}</h3>
    </div>
  );
}
