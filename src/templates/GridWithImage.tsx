"use client";
import { FadeIn } from "@/animations";
import Image from "next/image";
import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  src: string;
  alt: string;
}
export default function GridWithImage({
  children,
  src,
  alt,
}: Props): React.ReactElement {
  return (
    <section className=" w-full h-screen relative lg:grid lg:grid-cols-2">
      <article className=" container h-full pt-16 pb-24 flex flex-col gap-8 justify-center items-center backdrop-blur-sm ">
        {children}
      </article>
      <FadeIn className=" absolute inset-0 lg:relative -z-10">
        <Image
          fill
          src={src}
          alt={alt}
          className=" w-full h-full object-cover opacity-20 lg:opacity-60"
        />
        <section className="container h-full flex items-center "></section>
      </FadeIn>
    </section>
  );
}
