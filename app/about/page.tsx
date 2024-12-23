'use client';
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from 'next/image';


const UeberUns = () => {
    const [selectedMitarbeiter, setSelectedMitarbeiter] = useState(false);

    const mitarbeiter = [
        {
            selected: true,
            name: "Mojtaba R.",
            rolle: "Frisuer",
            bild: "/assets/mojtaba.jpg",
            erfahrung:
                "Mojtaba hat seine Ausbildung 2018 erfolgreich abgeschlossen und begeistert seither mit seinen frischen Ideen und seinem Geschick als Friseur. Gemeinsam mit Zobeid führt er den BarberShop und bringt frischen Wind in das Team.",
        },
        {
            selected: true,
            name: "Zobeid A.",
            rolle: "Filialleiter, Frisuer",
            bild: "/assets/zobeid.jpg",
            erfahrung:
                "Zobeid ist seit 2007 ein erfahrener Friseur und hat seine Ausbildung damals erfolgreich abgeschlossen. Im Laufe der Jahre hat er nicht nur sein Handwerk perfektioniert, sondern auch viele zufriedene Kunden gewonnen. Heute ist er der Filialleiter und führt den BarberShop erfolgreich in die Selbstständigkeit.",
        },
    ];

    const philosophieBilder = [
        { src: "/assets/rasier.jpg", alt: "Schneidebereich", title: "Schneidebereich", text: "Unser Schneidebereich ist der Ort, an dem Präzision auf Stil trifft. Mit modernen Geräten und bewährten Techniken sorgen unsere Friseure dafür, dass du den perfekten Schnitt erhältst. Ob klassisch oder trendy, hier bist du in besten Händen. Genieße eine entspannte Atmosphäre, während wir deinen Look auf das nächste Level bringen." },
        { src: "/assets/stuhl.jpg", alt: "Schneidegeräte", title: "Unsere Ambiente", text: "Das Ambiente in unserem BarberShop ist genauso wichtig wie der Schnitt selbst. Mit einer Kombination aus zeitlosem Design und gemütlicher Atmosphäre schaffen wir den perfekten Raum für dein Erlebnis. Warme Farben, stilvolle Einrichtung und eine entspannte Stimmung laden zum Verweilen ein. Hier kannst du dich zurücklehnen, entspannen und den Moment genießen, während wir uns um deinen Look kümmern." },
    ];

    return (
        <section className="mt-10 px-4 lg:px-16">
            {/* Über uns Abschnitt */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-black mb-4">Über uns</h2>
                <p className="text-lg text-gray-900 font-medium  ">
                    Willkommen in unserem BarberShop! Wir vereinen Tradition und Moderne, um dir den besten Service für Haar und Bart zu bieten.
                </p>
            </div>

            <div className="mb-12">
                <h3 className="text-3xl font-bold text-center mb-8">Unsere Philosophie</h3>
                <p className="text-lg text-center text-gray-900 font-medium mb-6">
                    Unsere Philosophie dreht sich um Qualität, Stil und eine persönliche Note. Wir glauben daran, dass jeder Besuch bei uns ein Erlebnis sein sollte  von der Atmosphäre bis zum perfekten Schnitt.
                </p>
                <div className="grid grid-cols-1 rounded-lg sm:grid-cols-2 gap-6 justify-center bg-blackBackground  p-7 text-white">
                    {philosophieBilder.map((philo, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg">
                            <div className="relative h-96 w-full">
                                <Image
                                    src={philo.src}
                                    alt={philo.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                            </div>
                            <h4 className="text-center text-xl font-semibold my-2">{philo.title}</h4>
                            <p className="text-center text-gray-400 mb-4">{philo.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Unser Team Abschnitt */}
            <div className="flex flex-col  lg:flex-row p-6 bg-blackBackground rounded-lg text-white">

                <div className="flex-1 lg:w-1/3 lg:pl-6 mt-6 lg:mt-0">
                    <h3 className="text-2xl font-bold mb-4">Willkommen bei unserem Team</h3>
                    <p className="text-gray-400">
                        Wir sind ein leidenschaftliches Team von Fachleuten, die zusammenarbeiten, um die besten
                        Ergebnisse für unsere Kunden zu erzielen. Jeder bringt seine einzigartigen Fähigkeiten mit, um
                        unser Ziel zu erreichen. Wir freuen uns darauf, gemeinsam mit Ihnen zu wachsen!
                    </p>
                    <p className="mt-4 text-gray-400">
                        Lernen Sie unser Team kennen, indem Sie die Profile unserer Mitarbeiter durchsehen. Klicken Sie
                        auf <span className="font-bold">mehr erfahren</span>, um weitere Details zu erfahren.
                    </p>
                </div>
                {/* Linker Container: Grid mit Cards */}
                <div className="flex-1 ">
                    <h3 className="text-2xl font-bold mb-4 flex justify-center md:justify-start md:ml-40">
                        Unser Team
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-center gap-5">
                        {mitarbeiter.map((person, index) => (
                            <Card
                                key={index}
                                className="bg-richBlack text-white border-none drop-shadow-lg h-80 w-64 flex flex-col justify-between"
                            >
                                <CardHeader className="px-4 py-2">
                                    <CardTitle className="text-lg font-bold text-hoverColor">{person.name}</CardTitle>
                                    <CardDescription className="text-xs mt-1">{person.rolle}</CardDescription>
                                </CardHeader>

                                {/* CardContent mit Bild */}
                                <CardContent className="flex justify-center p-0">
                                    <div className="relative w-full h-48"> {/* Feste Höhe für das Bild */}
                                        <Image
                                            src={person.bild}
                                            alt={`${person.name}'s Bild`}
                                            layout="fill"
                                            objectFit="cover "
                                            objectPosition="top"
                                            className="absolute inset-0 rounded-b-lg "
                                        />
                                    </div>
                                </CardContent>


                                <CardContent className="px-4 py-2 flex justify-center">
                                    <Dialog>
                                        <DialogTrigger
                                            className="mt-2 bg-hoverColor text-black px-2 py-1 text-sm font-semibold rounded-lg"
                                            onClick={() => setSelectedMitarbeiter(person.selected)}
                                        >
                                            Mehr erfahren
                                        </DialogTrigger>

                                        {selectedMitarbeiter && (
                                            <DialogContent className="bg-blackBackground border-none">
                                                <DialogTitle
                                                    className="text-hoverColor font-bold">{person.name}</DialogTitle>
                                                <DialogDescription className="text-gray-400 font-semibold">
                                                    {person.erfahrung}
                                                </DialogDescription>
                                                <DialogTrigger
                                                    className="bg-hoverColor text-black mt-4 px-4 py-2 rounded-lg font-semibold"
                                                    onClick={() => setSelectedMitarbeiter(person.selected)}
                                                >
                                                    Schließen
                                                </DialogTrigger>
                                            </DialogContent>
                                        )}

                                    </Dialog>
                                </CardContent>
                            </Card>

                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default UeberUns;
