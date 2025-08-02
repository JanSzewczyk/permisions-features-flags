import * as React from "react";

import { type Metadata } from "next";

import { ClerkProvider, SignedOut, SignInButton } from "@clerk/nextjs";
import { Header } from "@szum-tech/design-system";

import "./globals.css";

export const metadata: Metadata = {
  title: "Szumplate Next App",
  description: "Template for Next App by Szum-Tech"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header>
            <div className="flex w-full justify-between">
              <h1 className="text-heading-4">Sandbox App</h1>
              <div className="ml-16 flex flex-row items-center">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
            </div>
          </Header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
