"use client";
import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-richBlack text-white py-10 mt-[200px]">
            <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kontaktinformationen */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                    <ul className="text-sm space-y-2">
                        <li>BarberShop</li>
                        <li>Musterstraße 123</li>
                        <li>12345 Musterstadt</li>
                        <li>Telefon: <a href="tel:+491234567890" className="text-ButtonRed">+49 123 456 7890</a></li>
                        <li>Email: <a href="mailto:info@barbershop.de" className="text-ButtonRed">info@barbershop.de</a></li>
                    </ul>
                </div>

                {/* Rechtliches */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <Link href="/impressum" className="hover:underline">
                                Impressum
                            </Link>
                        </li>
                        <li>
                            <Link href="/datenschutz" className="hover:underline">
                                Datenschutzerklärung
                            </Link>
                        </li>
                        <li>
                            <Link href="/agb" className="hover:underline">
                                Allgemeine Geschäftsbedingungen
                            </Link>
                        </li>
                        <li>
                            <Link href="/widerruf" className="hover:underline">
                                Widerrufsrecht
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Folge uns</h3>
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://www.tiktok.com/@deinprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="text-2xl text-white hover:text-ButtonRed"
                        >
                            <FaTiktok />
                        </a>
                        <a
                            href="https://www.instagram.com/deinprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-2xl text-white hover:text-ButtonRed"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer-Bar */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center">
                <p>&copy; {new Date().getFullYear()} BarberShop. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
};

export default Footer;
