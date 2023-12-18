import React, { type ReactElement } from "react";
interface Props {
  children: string | string[];
}
export default function Pill({ children }: Props): ReactElement {
  return (
    <div className=" px-2 py-1 bg-secondary text-xs rounded-2xl text-dark">
      {children}
    </div>
  );
}
