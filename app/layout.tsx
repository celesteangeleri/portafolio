import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Configuración de las tipografías
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Celeste Angeleri | Fullstack Developer & Product Owner",
  description: "Portfolio of Celeste Angeleri, a Fullstack Semi Senior Developer and Product Owner creating immersive digital experiences and leading product strategy.",
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