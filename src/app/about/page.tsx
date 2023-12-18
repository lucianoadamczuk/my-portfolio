"use client";
import React, { useContext } from "react";
import { ContextDevice } from "@/contexts";
import { BoxText, GridWithImage } from "@/templates";

export default function page(): React.ReactNode {
  const { device } = useContext(ContextDevice);
  const image = `/about/${device}.webp`;
  return (
    <GridWithImage src={image} alt="A Profile photo of Luciano Adammczuk">
      <BoxText
        subtitle="Let is meet us"
        title="About Me"
        text="Who and how i am"
      />
    </GridWithImage>
  );
}
