import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKGO Japanese",
  description:
    "A Japanese Learning website to help students enjoy learning Japanese language and Japanese culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
