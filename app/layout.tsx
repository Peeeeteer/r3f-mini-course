import type { Metadata } from "next";
import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import { Nanum_Pen_Script } from "next/font/google";
export const nanum_pen_script = Nanum_Pen_Script({
  subsets: ["latin"],
  variable: "--font-nanum-pen-script",
  weight: "400",
});

import "@/styles/global.css";
import AuthContextProvider from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Just code",
  description: "No tutorials, No courses. Just code projects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${nanum_pen_script.variable} ${inter.variable}`}
    >
      <body className={`${inter.className}`}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
