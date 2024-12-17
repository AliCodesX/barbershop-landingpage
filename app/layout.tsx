'use client';
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer"; // Importiere Footer
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <html lang="en">
        <body className={montserrat.className}>
        <Navbar /> {/* Navbar wird auf allen Seiten angezeigt */}
        <main>{children}</main> {/* Der spezifische Inhalt jeder Seite */}
        {/* Footer nur auf anderen Seiten außer der Startseite */}
        {!isHomePage && <Footer />}
        </body>
        </html>
    );
}
