"use client";
import { ContextDevice } from "@/contexts";
import { BoxText, GridWithImage } from "@/templates";
import React, { useContext, type ReactNode } from "react";

export default function Home(): ReactNode {
  const { device } = useContext(ContextDevice);
  const image = `/home/${device}.webp`;

  return (
    <main>
      <GridWithImage src={image} alt="Luciano Adamczuk walking up the stairs">
        <BoxText subtitle="Front End Developer" title="Luciano Adamczuk" />
      </GridWithImage>
    </main>
  );
}
