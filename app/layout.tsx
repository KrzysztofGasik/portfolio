import React from 'react';
import Header from '@/components/header/header';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer/footer';
import DarkModeContextProvider from '@/context/dark-mode-context';
import DarkMode from '@/components/dark-mode/dark-mode';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Krzysztof Gasik - Frontend Developer | Portfolio',
  description: 'Experienced Frontend Developer with 5 years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className}`}>
        <DarkModeContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster position="bottom-center" />
          <DarkMode />
        </DarkModeContextProvider>
      </body>
    </html>
  );
}
