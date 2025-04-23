import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "./provider/toastProvider";
import { DarkModeProvider } from "../utility/darkModeContext";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio - Setiawan Harish P",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leadiing-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <DarkModeProvider>
          <ToasterProvider />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
