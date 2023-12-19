"use client";
import { PageNameAnimation } from "@/animations";
import { TextSpinner } from "@/components/others";
import { routes } from "@/configs";
import { ContextDevice } from "@/contexts";
import { BoxHeader, GridWithImage } from "@/templates";
import React, { useContext, type ReactNode } from "react";

export default function Home(): ReactNode {
  const { device } = useContext(ContextDevice);
  const image = `/home/${device}.webp`;

  return (
    <>
      <GridWithImage src={image} alt="Luciano Adamczuk walking up the stairs">
        <TextSpinner />

        <BoxHeader
          subtitle="Being part of the IT world"
          title="Luciano Adamczuk"
          text="Front End Developer"
        />
      </GridWithImage>
      <PageNameAnimation text={routes.home.name} />
    </>
  );
}
