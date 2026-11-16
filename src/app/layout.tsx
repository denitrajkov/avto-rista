import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
    <html lang="sr-Latn" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
