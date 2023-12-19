import Link from "next/link";
import React, { type ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}
export default function Button({ href, children }: Props): React.ReactNode {
  return (
    <Link
      className=" px-5 py-2 rounded-md bg-primary hover:scale-110 hover:bg-primary-dark"
      href={href}
    >
      {children}
    </Link>
  );
}
