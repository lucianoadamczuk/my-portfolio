import Image from "next/image";
import React, { type ReactElement, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  src: string;
  alt: string;
}
export default function GridWithImage({
  children,
  src,
  alt,
}: Props): ReactElement {
  return (
    <section className=" h-screen relative grid lg:grid-cols-2">
      <article className=" container">{children}</article>
      <article className=" absolute inset-0 lg:relative -z-10">
        <Image fill src={src} alt={alt} className=" object-cover opacity-30" />
      </article>
    </section>
  );
}
