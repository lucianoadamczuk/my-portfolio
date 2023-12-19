"use client";
import { PageNameAnimation } from "@/animations";
import { configContact, routes } from "@/configs";
import { ContextDevice } from "@/contexts";
import { IconEvelope, IconLocation, IconPhone } from "@/icons";
import { BoxText, GridWithImage } from "@/templates";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export default function page(): React.ReactNode {
  const { device } = useContext(ContextDevice);
  const image = `/contact/${device}.webp`;
  const data = [
    {
      icon: <IconPhone />,
      text: configContact.phone,
    },
    {
      icon: <IconEvelope />,
      text: configContact.email,
    },
    {
      icon: <IconLocation />,
      text: configContact.location,
    },
  ];
  return (
    <>
      <GridWithImage src={image} alt="Luciano Adamczuk tying his shoes laces">
        <BoxText subtitle="Time to work" title="Contact" />
        {data.map((item) => (
          <div key={uuidv4()} className=" flex gap-3 flex-col items-center">
            {item.icon}
            <p className=" text-sm"> {item.text} </p>
          </div>
        ))}
      </GridWithImage>
      <PageNameAnimation text={routes.contact.name} />
    </>
  );
}
