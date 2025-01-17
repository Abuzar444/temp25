import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Practice",
  description: "Never walk alone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="px-8 py-20 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
