import { configContact } from "@/configs";
import { IconGithub, IconLinkedIn } from "@/icons";
import Link from "next/link";
import React from "react";
export default function SocialMedias(): React.ReactNode {
  return (
    <div className=" container w-full fixed top-5 flex flex-col items-end gap-2 ">
      <div className=" flex gap-2">
        <Link href={configContact.linkedIn} target="_blank">
          <IconLinkedIn className="w-6 h-6 fill-gray hover:fill-light hover:scale-110" />
        </Link>
        <Link href={configContact.github} target="_blank">
          <IconGithub className="w-6 h-6 fill-gray hover:fill-light hover:scale-110" />
        </Link>
      </div>
      <small className=" text-xs text-gray">Follow me</small>
    </div>
  );
}
