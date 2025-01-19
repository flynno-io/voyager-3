import React from "react";
import PhotoStack from "@/ui/photo-stack";
import "@/styles/global.css";
import { outfit } from "@/fonts/*";
import type { Metadata } from "next";
import VoyagerLogo from "@/ui/voyager-logo";

// Setup to use Font Awesome icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const meta: Metadata = {
  title: "Voyager III",
  description: "Read about the Voyager III mission, one never to be forgotten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className={`max-h-full w-full`}>{children}</main>
      </body>
    </html>
  );
}
