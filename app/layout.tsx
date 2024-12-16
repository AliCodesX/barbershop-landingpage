import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";  // Importiere Navbar

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body  className={montserrat.className}>
        <Navbar /> {/* Navbar wird auf allen Seiten angezeigt */}
        <main>{children}</main> {/* Der spezifische Inhalt jeder Seite */}
        {/* Hier kommt der Banner hin */}
        </body>
        </html>
    );
}
