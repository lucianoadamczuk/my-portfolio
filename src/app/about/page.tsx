"use client";
import React, { useContext } from "react";
import { ContextDevice } from "@/contexts";
import { BoxText, GridWithImage } from "@/templates";
import { CarouselAbout } from "@/components/others";

export default function page(): React.ReactNode {
  const { device } = useContext(ContextDevice);
  const image = `/about/${device}.webp`;
  return (
    <GridWithImage src={image} alt="A Profile photo of Luciano Adammczuk">
      <BoxText subtitle="Let me introduce myself" title="About Me" />

      <CarouselAbout />
    </GridWithImage>
  );
}
