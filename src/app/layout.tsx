import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarush Maddula | Portfolio",
  description: "Portfolio of Aarush Maddula, an aspiring computer engineer.",
  other: {    
    "google-site-verification": "hvWgxr21EWTqTlVeyukPOtDc4t9gDviX9UuFdzd_92I"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-dark`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
