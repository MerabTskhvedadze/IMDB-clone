import Providers from "./providers";

import type { Metadata } from "next";
import { Header, Navbar, SearchBox } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "IMDB",
  description: "imdb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />

          <Navbar />

          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
