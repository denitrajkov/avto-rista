import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Servis | Pouzdan servis i popravka vozila",
  description:
    "Pouzdano održavanje i popravka vozila uz stručan tim i savremenu dijagnostiku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body>{children}</body>
    </html>
  );
}
