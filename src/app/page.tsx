import { BoxText, GridWithImage } from "@/templates";
import React, { type ReactNode } from "react";

export default function Home(): ReactNode {
  const image = `/home/home-mobile.webp`;
  return (
    <main>
      <GridWithImage src={image} alt="Luciano Adamczuk walking up the stairs">
        <BoxText
          subtitle="Front End Developer"
          title="Luciano Adamczuk"
          text="Create - transform - inspire"
        />
      </GridWithImage>
    </main>
  );
}
