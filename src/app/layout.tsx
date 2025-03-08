import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets:["latin","latin-ext"]
});


export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Generated by create next app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
>
        {children}
      </body>
    </html>
  );
}
