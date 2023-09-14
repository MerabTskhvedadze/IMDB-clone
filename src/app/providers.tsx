"use client";

import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

export default function providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
