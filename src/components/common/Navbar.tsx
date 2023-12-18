import Link from "next/link";
import React, { type ReactElement } from "react";

interface Props {
  links: Array<{ path: string; name: string }>;
}
export default function Navbar({ links }: Props): ReactElement {
  const classes = {
    nav: "w-full fixed bottom-10 flex flex-col items-center gap-2",
    text: "text-gray text-xs",
    section:
      "px-5 py-2 bg-gray bg-opacity-20 space-x-5 rounded-2xl backdrop-blur-md",
  };

  return (
    <nav className={classes.nav}>
      <p className={classes.text}>Create - Transform - Inspire</p>
      <section className={classes.section}>
        {links?.map((link) => (
          <Link key={link.path} href={link.path}>
            {link.name}
          </Link>
        ))}
      </section>
    </nav>
  );
}
