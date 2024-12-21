'use client';
import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Modal } from '@mui/material';
import Image from 'next/image';

const UeberUns = () => {
    const [selectedMitarbeiter, setSelectedMitarbeiter] = useState(false);

    const mitarbeiter = [
        {
            name: "Mojtaba R.",
            rolle: "Frisuer",
            bild: "/assets/mojtaba.jpg",
            erfahrung:
                "Mojtaba hat seine Ausbildung 2018 erfolgreich abgeschlossen und begeistert seither mit seinen frischen Ideen und seinem Geschick als Friseur. Gemeinsam mit Zobeid führt er den BarberShop und bringt frischen Wind in das Team.",
        },
        {
            name: "Zobeid A.",
            rolle: "Filialleiter, Frisuer",
            bild: "/assets/zobeid.jpg",
            erfahrung:
                "Zobeid ist seit 2007 ein erfahrener Friseur und hat seine Ausbildung damals erfolgreich abgeschlossen. Im Laufe der Jahre hat er nicht nur sein Handwerk perfektioniert, sondern auch viele zufriedene Kunden gewonnen. Heute ist er der Filialleiter und führt den BarberShop erfolgreich in die Selbstständigkeit.",
        },
    ];

    const philosophieBilder = [
        { src: "/assets/rasier.jpg", alt: "Schneidebereich", title: "Schneidebereich",text: "Unser Schneidebereich ist der Ort, an dem Präzision auf Stil trifft. Mit modernen Geräten und bewährten Techniken sorgen unsere Friseure dafür, dass du den perfekten Schnitt erhältst. Ob klassisch oder trendy  hier bist du in besten Händen. Genieße eine entspannte Atmosphäre, während wir deinen Look auf das nächste Level bringen." },
        { src: "/assets/stuhl.jpg", alt: "Schneidegeräte", title: "Unsere Ambiente",text:"Das Ambiente in unserem BarberShop ist genauso wichtig wie der Schnitt selbst. Mit einer Kombination aus zeitlosem Design und gemütlicher Atmosphäre schaffen wir den perfekten Raum für dein Erlebnis. Warme Farben, stilvolle Einrichtung und eine entspannte Stimmung laden zum Verweilen ein. Hier kannst du dich zurücklehnen, entspannen und den Moment genießen, während wir uns um deinen Look kümmern." },
    ];

    return (
        <section className="mt-10 px-4 lg:px-16">
            {/* Über uns Abschnitt */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-black mb-4">Über uns</h2>
                <p className="text-lg text-gray-900">
                    Willkommen in unserem BarberShop! Wir vereinen Tradition und Moderne, um dir den besten Service für
                    Haar und Bart zu bieten.
                </p>
            </div>


            <div className="mb-12">
                <h3 className="text-3xl font-bold text-center mb-8">Unsere Philosophie</h3>
                <p className="text-lg text-center text-gray-900 mb-6">
                    Unsere Philosophie dreht sich um Qualität, Stil und eine persönliche Note. Wir glauben daran, dass
                    jeder Besuch bei uns ein Erlebnis sein sollte – von der Atmosphäre bis zum perfekten Schnitt.
                </p>
                <div
                    className="grid grid-cols-1 rounded-lg sm:grid-cols-2 gap-6 justify-center bg-richBlack p-7 text-white ">
                    {philosophieBilder.map((philo, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg ">
                            <div className="relative h-96 w-full">
                                <Image
                                    src={philo.src}
                                    alt={philo.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                            </div>
                            <h4 className="text-center  text-xl font-semibold my-2">{philo.title}</h4>
                            <p className="text-center text-gray-400 mb-4 ">{philo.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-col lg:flex-row p-6 bg-richBlack text-white">
                {/* Linker Container: Grid mit Cards */}
                <div className="flex-1 lg:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Unser Team</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {mitarbeiter.map((person, index) => (
                            <Card key={index} className="bg-richBlack">
                                <CardMedia
                                    component="img"
                                    className="h-4/6 w-full object-top object-cover"
                                    image={person.bild}
                                    title={person.name}
                                    alt={`${person.name}'s Bild`}
                                />
                                <CardContent className="p-2 text-white">
                                    <Typography variant="h6" className="text-sm font-bold">
                                        {person.name}
                                    </Typography>
                                    <Typography variant="body2" className="text-xs mt-1">
                                        {person.rolle}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        onClick={() => setSelectedMitarbeiter(person)}
                                        className="mt-4 bg-ButtonRed text-white"
                                    >
                                        Mehr erfahren
                                    </Button>
                                </CardContent>

                            </Card>

                        ))}
                    </div>
                </div>

                {/* Rechter Container: Text */}
                <div className="flex-1 lg:w-1/3 lg:pl-6 mt-6 lg:mt-0">
                    <h3 className="text-2xl font-bold mb-4">Willkommen bei unserem Team</h3>
                    <p className="text-gray-400">
                        Wir sind ein leidenschaftliches Team von Fachleuten, die zusammenarbeiten, um die besten
                        Ergebnisse für unsere Kunden zu erzielen.
                        Jeder bringt seine einzigartigen Fähigkeiten mit, um unser Ziel zu erreichen. Wir freuen uns
                        darauf, gemeinsam mit Ihnen zu wachsen!
                    </p>
                    <p className="mt-4 text-gray-400">
                        Lernen Sie unser Team kennen, indem Sie die Profile unserer Mitarbeiter durchsehen. Klicken Sie
                        auf Mehr erfahren, um weitere Details zu erfahren.
                    </p>
                </div>
            </div>


            {/* Modal für Mitarbeiterdetails */}
            {selectedMitarbeiter && (
                <Modal
                    open={Boolean(selectedMitarbeiter)}
                    onClose={() => setSelectedMitarbeiter(null)}
                    className="flex items-center justify-center p-4"
                >
                    <div className="bg-richBlack rounded-lg p-6 max-w-sm w-full text-white">
                        <div className="flex flex-col items-center">

                            <Typography variant="h6"
                                        className="text-xl font-semibold mb-2">{selectedMitarbeiter.name}</Typography>
                            <Typography variant="body2"
                                        className="text-gray-400 mb-4 text-center">{selectedMitarbeiter.erfahrung}</Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={() => setSelectedMitarbeiter(null)}
                            >
                                Schließen
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default UeberUns;
