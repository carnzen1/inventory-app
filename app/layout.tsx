import "@/styles/globals.css";
import { ReactNode } from "react";
import { NavBar } from "@/components/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
