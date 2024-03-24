'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProfileContext } from "@/context/profileContext";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [authentication, setAuthentication] = useState("0");

  useEffect(() => {
    if (localStorage.getItem("authentication") === '1') {
      console.log("reload")
      setAuthentication(1);
    }
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProfileContext.Provider value={{authentication, setAuthentication}}>
          <Header />
          {children}
          <Footer />
        </ProfileContext.Provider>
      </body>
    </html>
  );
}
