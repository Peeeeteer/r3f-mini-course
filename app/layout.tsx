import type { Metadata } from "next";

import "@/styles/global.css";
import AuthContextProvider from "@/contexts/AuthContext";
import { inter, nanum_pen_script } from "./fonts";

export const metadata: Metadata = {
  title: "justcode | make stuff",
  description: "No tutorials, No courses. Just coding projects.",
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
