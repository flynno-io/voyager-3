import React from "react";
import "@/styles/global.css";
import VoyagerLogo from "@/ui/voyager-logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`max-h-full w-full`}>
      <div className={`bg-blog-hero flex h-72 items-end justify-end bg-cover`}>
        <VoyagerLogo className={`px-2 text-white`} />
      </div>
      <div>{children}</div>
    </main>
  );
}
