import React from "react";
import Image from "next/image";


const Preise = () => {
    const services = [
        { name: "Waschen, Schneiden, Föhnen", description: "Mit Epilierer", price: "18€" },
        { name: "Trockenschnitt", description: "Schnell und präzise", price: "15€" },
        { name: "Momo & Zozo Paket", description: "All-inclusive-Erlebnis", price: "30€" },
        { name: "Bartschnitt mit Konturenrasur", description: "Für perfekte Linien", price: "10€" },
        { name: "Kinderhaarschnitt bis 10 Jahre", description: "Besonders kinderfreundlich", price: "10€" },
        { name: "Augenbrauen zupfen", description: "Für den perfekten Look", price: "5€" },
    ];

    return (
        <div className="p-6 ">
            {/* Überschrift */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-black mb-4">Unsere Preisliste</h2>
            </div>

            {/* Preisliste */}
            <div className=" bg-blackBackground text-white rounded-xl shadow-2xl p-6">
                {services.map((service, index) => (
                    <div key={index} className="flex items-center py-4  ">
                        {/* Icon */}
                        <div className="flex w-12 h-12">
                            <Image src="/assets/barber-pole.png" alt="Barber Pole" className="rounded-full" width={48} height={48} />
                        </div>

                        {/* Service Details */}
                        <div className="flex-grow px-4">
                            <h3 className="text-lg font-bold text-white">{service.name}</h3>
                            <p className="text-sm text-gray-400">{service.description}</p>
                        </div>

                        {/* Preis */}
                        <div className="text-right">
                            <p className="text-lg font-bold text-white">{service.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Preise;
