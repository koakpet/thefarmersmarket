import { Atma, Festive, Sansation } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";


const atma = Atma({
  variable: "--font-atma",
  display: "swap",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const festive = Festive({
  variable: "--font-festive",
  display: "swap",
  subsets: ["latin"],
  weight: ['400']
});

const sansation = Sansation({
  variable: "--font-sansation",
  display: "swap",
  subsets: ["latin"],
  weight: ['300', '400', '700']
})

export const metadata = {
  title: "The Farmers' Market",
  description: "Powered by Modular-Wave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${atma.variable} ${festive.variable} ${sansation.variable}`}
      >
        <NavBar />
        <main className="sansation">{children}</main>
      </body>
    </html>
  );
}
