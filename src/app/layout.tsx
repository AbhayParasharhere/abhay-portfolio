import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import CursorSpotlight from "@/components/CursorSpotlight";
import SideRails from "@/components/SideRails";
import Navigation from "@/components/Navigation";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhay Parashar | Full-Stack Engineer",
  description: "Full-stack engineer out of Vancouver. 4 years of experience shipping real products to real users. Open to full-time engineering roles in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${dmSans.variable} font-sans bg-navy text-slate-400 antialiased relative min-h-screen selection:bg-teal/30 selection:text-teal-light`}>
        {/* Subtle Noise Texture Overlay */}
        <div
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        <CursorSpotlight />
        <Navigation />
        <SideRails />

        <main className="relative z-10 flex flex-col w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
