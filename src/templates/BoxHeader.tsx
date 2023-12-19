import React, { type ReactElement } from "react";

interface Props {
  subtitle: string;
  title: string;
}

export default function BoxText({ subtitle, title }: Props): ReactElement {
  return (
    <div className="w-full text-center ">
      <h5 className=" text-sm tracking-widest"> {subtitle} </h5>
      <h1 className=" font-bold text-6xl ">{title}</h1>
      <small className=" text-xs tracking-[8px] text-light ">
        Front End Developer
      </small>
      <div className=" scale-y-[-1] ">
        <small className="  text-xs tracking-[8px] opacity-30 bg-gradient-to-t from-light bg-clip-text text-transparent ">
          Front End Developer
        </small>
      </div>
    </div>
  );
}
