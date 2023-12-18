"use client";
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
    <section className=" h-screen relative grid lg:grid-cols-2">
      <article className=" container pt-10 pb-28 flex flex-col gap-10 justify-center items-center ">
        {children}
      </article>
      <article className=" absolute inset-0 lg:relative -z-10">
        <Image
          fill
          src={src}
          alt={alt}
          className=" w-full h-full object-cover opacity-30"
        />
        <section className="container h-full flex items-center "></section>
      </article>
    </section>
  );
}
