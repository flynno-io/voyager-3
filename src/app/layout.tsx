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
        <main className={`max-h-full w-full`}>
          <div
            className={`align-center flex h-screen w-full flex-row justify-center gap-0`}
          >
            <section
              className={`hidden h-full max-w-[60%] flex-auto items-center justify-center md:flex`}
            >
              <PhotoStack />
            </section>
            <section
              className={`m-0 flex h-full w-full flex-col items-center justify-center md:me-16`}
            >
              <VoyagerLogo />
              <div className={`m-0 flex h-auto flex-col gap-2 p-0`}>
                {children}
              </div>
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
