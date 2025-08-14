import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="max-w-4xl mx-auto flex flex-col text-white">{children}</main>
    </>
  );
}
