'use client';

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Contact = () => {
    const address = "Am Schilfspark 26, 21029 Hamburg";
    const phone = "040/ 320 44 777";
    const openingHours = "Mo - Sa: 9:00 - 19:00 Uhr";
    const holidayNotice = "An Feiertagen können die Öffnungszeiten abweichen.";

    // Typewriter effect using the hook
    const [text] = useTypewriter({
        words: ["Du kannst jederzeit ohne Termin vorbeikommen."],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <section className="mt-10 px-4 lg:px-16">
            <div className="mt-10 p-6 bg-blackBackground text-white rounded-md shadow-md">
                {/* Typewriter Text */}
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold mb-2">Besuche uns ohne einen Termin!</h2>
                    <p className="text-base md:text-lg font-semibold mt-4">
                        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17"/>
                    </p>
                </div>

                {/* Kontaktinformationen */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4">Kontaktinformationen</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-richBlack p-4 rounded-md shadow">
                            <h4 className="text-lg font-semibold mb-2">Adresse</h4>
                            <p className="text-gray-400">{address}</p>
                        </div>
                        <div className="bg-richBlack p-4 rounded-md shadow">
                            <h4 className="text-lg font-semibold mb-2">Telefon</h4>
                            <p className="text-gray-400">{phone}</p>
                        </div>
                    </div>
                </div>

                {/* Öffnungszeiten */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-richBlack p-4 rounded-md shadow">
                            <h4 className="text-lg font-semibold mb-2">Unsere Öffnungszeiten</h4>
                            <p className="text-gray-400">{openingHours}</p>
                        </div>
                        <div className="bg-richBlack p-4 rounded-md shadow">
                            <p className="text-gray-400">{holidayNotice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact;