"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
    const [text] = useTypewriter({
        words: [
            "Dein Stil, unser Fokus.",
            "Exzellente Barber-Kunst für deinen Look.",
            "Jeder Schnitt sitzt – perfekt und einzigartig.",
            "Wo jeder Schnitt eine Geschichte erzählt."

        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div>
            {/* Hintergrundvideo (fixiert) */}
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <video
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.62) translateY(-10%)' }} // Optional: Zoom und Verschiebung
                    src="https://res.cloudinary.com/dwxo7smmp/video/upload/v1734975741/qunxohwpaak9gyoebfeb.mp4"
                    autoPlay
                    muted
                    loop
                />
            </div>

            {/* Abdunklung */}
            <div className="fixed  top-0 left-0 w-full h-full bg-black opacity-75"></div>

            {/* Content */}
            <div className=" mt-32 relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
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
