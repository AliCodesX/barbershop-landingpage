"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
    const [text] = useTypewriter({
        words: [
            "Dein Stil, unser Fokus.",
            "Exzellente Barber-Kunst für deinen Look.",
            "Jeder Schnitt sitzt – perfekt und einzigartig."
        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Hintergrundvideo mit Zoom und Verschiebung */}
            <div className="absolute top-0 left-0 w-full h-full">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ transform: 'scale(1.62) translateY(-10%)' }} // Zoom und Verschiebung nach oben
                    src={require('../public/assets/intro.mp4')} // oder src="/assets/intro.mp4"
                    autoPlay
                    muted
                    loop
                />
            </div>

            {/* Abdunklung */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-10"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight">
                    MOMO & ZOZO BARBERSHOP
                </h1>
                <p className="text-base md:text-lg font-semibold mt-4">
                    {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
                </p>
            </div>
        </div>
    );
};

export default Banner;
