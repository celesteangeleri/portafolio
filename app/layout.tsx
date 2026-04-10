import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Configuración de las tipografías
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Celeste Angeleri | Frontend Developer",
  description: "Portfolio of Celeste Angeleri, a Frontend Developer creating immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#faf3dd] text-[#5e6472]`}>
        {children}
      </body>
    </html>
  );
}