"use client";
import React, { type ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  links: Array<{ path: string; name: string }>;
}
export default function Navbar({ links }: Props): ReactElement {
  const pathname = usePathname();

  const classes = {
    nav: "w-full fixed bottom-6 flex flex-col items-center gap-2",
    text: "text-gray text-xs",
    section:
      "px-5 py-2 bg-gray bg-opacity-10 space-x-5 rounded-md backdrop-blur-sm",
  };

  return (
    <nav className={classes.nav}>
      <section className={classes.section}>
        {links?.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={` hover:text-gray ${
              link.path === pathname ? "text-primary" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </section>
      <p className={classes.text}>Create - Transform - Inspire</p>
    </nav>
  );
}
