import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Bookshelf",
  description: "A theme-based reading map built with CSS 3D bookshelves.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
