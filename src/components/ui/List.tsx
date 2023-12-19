import { routes } from "@/configs";
import Link from "next/link";
import React, { type ReactElement } from "react";

interface Props {
  display: Array<{ name: string; description: string }>;
}
export default function List({ display }: Props): ReactElement {
  return (
    <ul className=" divide-y-2 divide-secondary-dark">
      {display?.map((item) => (
        <div
          key={item.name}
          className=" w-full p-3 my-1 cursor-pointer hover:bg-gradient-to-b hover:from-secondary hover:to-secondary-dark active:bg-secondary "
        >
          <Link
            href={
              routes.projects.path +
              "/" +
              item.name.replace(/\s+/g, "-").toLowerCase()
            }
          >
            <li className=" list-disc list-inside"> {item.name} </li>
            <p className=" text-xs text-gray line-clamp-1">
              {item.description}
            </p>
          </Link>
        </div>
      ))}
    </ul>
  );
}
