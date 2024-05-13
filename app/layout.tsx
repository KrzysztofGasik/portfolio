import React from "react";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import DarkModeContextProvider from "@/context/dark-mode-context";
import DarkMode from "@/components/dark-mode/dark-mode";
import Background from "@/app/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krzysztof Gasik - Frontend Developer | Portfolio",
  description: "Experienced Frontend Developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <DarkModeContextProvider>
          <Background />
          <ActiveSectionProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
          </ActiveSectionProvider>
          <DarkMode />
        </DarkModeContextProvider>
      </body>
    </html>
  );
}
