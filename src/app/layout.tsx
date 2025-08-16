import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarush Maddula",
  description: "Portfolio of Aarush Maddula, an aspiring computer engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
