import { Button } from "@/components/ui";
import { routes } from "@/configs";
import BoxText from "@/templates/BoxHeader";
import React from "react";

export default function notFound(): React.ReactNode {
  return (
    <article className=" w-full h-screen flex flex-col justify-center items-center gap-10">
      <BoxText
        subtitle="upsss"
        title="Error"
        text="Probably this page doesn't exist"
      />
      <Button href={routes.home.path}> Go Back {routes.home.name} </Button>
    </article>
  );
}
