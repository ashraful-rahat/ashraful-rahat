import LenisProvider from "@/hooks/lib/LenisProvider";
import { Lexend } from "next/font/google";
import "./globals.css";

// Load Lexend font
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // customize as needed
  display: "swap",
});

export const metadata = {
  title: "Ashraful Rahat | Full Stack Developer",
  description: "Your app description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply Lexend globally */}
      <body className={lexend.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
