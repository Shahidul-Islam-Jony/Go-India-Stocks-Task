import { Inter } from "next/font/google";

import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go India Stocks",
  description: "Go India Stocks",
  icons: {
    icon: ["../../public/logo3.png"],
    apple: ["../../public/logo3.png"],
    shortcut: ["../../public/logo3.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link href="./favicon.ico" rel="shortcut icon"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
