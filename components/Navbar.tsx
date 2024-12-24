"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {FaInstagram, FaTiktok} from "react-icons/fa";

const Navbar = () => {
    // State für das Responsive Menu
    const [isOpen, setIsOpen] = useState(false);
    // Pathname state für die Farbverwaltung der Navbar in verschiedenen Seiten
    const pathname = usePathname();

    // Toggle Menu Funktion für das Responsive Design
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isHomePage = pathname === "/";

    return (
        <div className={`sticky top-0 z-30 w-full h-20 lg:h-28 ${isHomePage ? 'bg-transparent' :  'bg-richBlack'} text-white`}>
            <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex flex-row items-center gap-2 justify-start">
                    <Link href={"./"}><Image src="/assets/logo.png" alt="logo" height={70} width={70}/></Link>
                </div>
                {/* Desktop-Navigation */}
                <ul className="hidden lg:flex items-center justify-end gap-8 uppercase text-sm font-semibold">
                    <Link href="./">
                        <li className="navbarLi">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="navbarLi">Über uns</li>
                    </Link>
                    <Link href="/price">
                        <li className="navbarLi">Preise</li>
                    </Link>
                    <Link href="/contact">
                        <li className="navbarLi">Kontakt</li>
                    </Link>
                </ul>

                {/* Mobile-Navigation */}
                <div className="lg:hidden">
                    <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu}/>
                </div>
                <motion.div
                    initial={{x: "100%"}}
                    animate={isOpen ? {x: 0} : {x: "100%"}}
                    transition={{duration: 0.5}}
                    className="fixed top-0 right-0 h-screen w-64 bg-richBlack text-white shadow-md p-4"
                >
                    <div className="flex items-center justify-between mb-4 ">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <FiX className="text-3xl cursor-pointer" onClick={toggleMenu}/>
                    </div>
                    <ul className="space-y-4">

                        <li onClick={toggleMenu} className="navbarLi"><Link href="./">Home</Link></li>
                        <li onClick={toggleMenu} className="navbarLi"><Link href="/about">Über uns</Link></li>
                        <li onClick={toggleMenu} className="navbarLi"><Link href="/price">Preise</Link></li>
                        <li onClick={toggleMenu} className="navbarLi"><Link href="/contact">Kontakt</Link></li>
                    </ul>
                    <div className="flex flex-col items-start justify-between mb-4 mt-20">
                        <h2 className="text-xl font-bold mb-4">Social Media</h2>
                        <ul className="flex flex-col items-start gap-4 list-none pl-0">
                            <li>
                                <a
                                    href="https://www.tiktok.com/@momo.zozo.barber?_t=8sTxmGtdyxa&_r=1"
                                    target="_blank"
                                    aria-label="TikTok"
                                    className="text-2xl text-white hover:text-hoverColor flex items-center"
                                >
                                    <FaTiktok/>
                                    <span className="sr-only">TikTok</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/momo.zozo.barber?igsh=aDQ2emNuaGVxbnBk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-2xl text-white hover:text-hoverColor flex items-center"
                                >
                                    <FaInstagram/>
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </motion.div>
            </div>
        </div>

    );
};

export default Navbar;
