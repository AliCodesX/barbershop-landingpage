"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 z-30 w-full h-20 lg:h-28 bg-black text-white">
            <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex flex-row items-center gap-2 justify-start">
                    <Image src="/assets/logo.png" alt="logo" height={70} width={70}/>
                    <Link href={"./"}><h1 className="text-2xl font-bold navbarLi">MOMO & ZOZO</h1></Link>
                </div>

                {/* Desktop-Navigation */}
                <ul className="hidden lg:flex items-center justify-end gap-8 uppercase text-sm font-semibold">
                    <Link href="./">
                        <li className="navbarLi">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="navbarLi">Über uns</li>
                    </Link>
                    <Link href="./">
                        <li className="navbarLi">Preise</li>
                    </Link>
                    <Link href="./">
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
                    className="fixed top-0 right-0 h-screen w-64 bg-gray-900 text-white shadow-md p-4"
                >
                    <div className="flex items-center justify-between mb-4 ">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <FiX className="text-3xl cursor-pointer" onClick={toggleMenu}/>
                    </div>
                    <ul className="space-y-4">
                        <li className="navbarLi">Home</li>
                        <li className="navbarLi">Über uns</li>
                        <li className="navbarLi">Preise</li>
                        <li className="navbarLi">Kontakt</li>
                    </ul>
                </motion.div>
            </div>
        </div>

    );
};

export default Navbar;