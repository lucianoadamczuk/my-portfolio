import React, { type ReactElement } from "react";
interface Props {
  children: string | string[];
}
export default function Pill({ children }: Props): ReactElement {
  return (
    <div className=" px-2 py-1 bg-gradient-to-b from-secondary to bg-secondary-dark  text-xs rounded-2xl text-light">
      {children}
    </div>
  );
}
