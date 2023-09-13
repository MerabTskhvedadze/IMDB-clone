import type { Metadata } from "next";
import { Header } from "@/components";
import Providers from "./providers";

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
          {/* header */}
          <Header />
          {/* navbar */}

          {/* searchbox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
