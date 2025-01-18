import React from "react";
import PhotoStack from "@/ui/photo-stack";
import "@/styles/global.css";
import { outfit } from "@/fonts/*";
import type { Metadata } from "next";
import VoyagerLogo from "@/ui/voyager-logo";

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
          <div className={`flex h-screen w-full flex-row gap-0`}>
            <section
              className={`h-full flex-auto max-w-[60%] items-center justify-center`}
            >
              <PhotoStack />
            </section>
            <section
              className={`h-full w-full me-16 flex flex-col items-center justify-center`}
            >
              <VoyagerLogo />
              <div
                className={`m-0 flex h-auto flex-col gap-1 space-y-2 p-0`}
              >
                {children}
              </div>
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
