import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";


import "./globals.css";

import { Montserrat } from 'next/font/google'

const mont = Montserrat({
  weight: [ '200', '300', '400', '500', '600', '700', '800', '900'], 
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Vimal Work",
  description: "Created by Vimal Bhatt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mont.className}
      > 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
