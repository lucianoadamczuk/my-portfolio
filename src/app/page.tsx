import { BoxText, GridWithImage } from "@/templates";
import React, { type ReactNode } from "react";

export default function Home(): ReactNode {
  const image = `/home/home-desktop.webp`;
  return (
    <main>
      <GridWithImage src={image} alt="Luciano Adamczuk walking up the stairs">
        <BoxText
          subtitle="Front End Developer"
          title="Luciano Adamczuk"
          text="Being part of the IT industry"
        />
      </GridWithImage>
    </main>
  );
}
