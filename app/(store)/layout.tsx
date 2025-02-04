import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import React from "react";

export const metadata: Metadata = {
  title: "NexStore",
  description: "A simple e-commerce store built with Next.js and Sanity",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>

    <html lang="en">
      <body>

        {(await draftMode()).isEnabled && (
          <>
          <DisableDraftMode />
          <VisualEditing />
          </>
        )}
        <main>
          <Header/>

        {children}
        </main>
        <SanityLive />
      </body>
    </html>
        </ClerkProvider>
  );
}
