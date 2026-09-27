import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Fit Log",
  description: "Fitness tracking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}