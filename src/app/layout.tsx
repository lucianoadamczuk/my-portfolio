import { Navbar, SocialMedias } from "@/components/common";
import { routes } from "@/configs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { type ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luciano Adamczuk",
  description:
    "Be part of the web with my. Let's create a fantastic website for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactNode {
  return (
    <html lang="en">
      <body className={` ${inter.className} bg-dark text-light`}>
        <Providers>
          <main>{children}</main>
          <SocialMedias />
          <Navbar links={Object.values(routes)} />
        </Providers>
      </body>
    </html>
  );
}
