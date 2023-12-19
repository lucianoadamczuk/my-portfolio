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
    <div className="w-full text-center ">
      <h5 className=" text-sm tracking-widest"> {subtitle} </h5>
      <h1 className=" font-bold text-6xl ">{title}</h1>
      <small className=" text-xs tracking-[8px] text-light ">{text}</small>
      <div className=" scale-y-[-1] ">
        <small className="  text-xs tracking-[8px] opacity-60 bg-gradient-to-t from-light bg-clip-text text-transparent ">
          {text}
        </small>
      </div>
    </div>
  );
}
