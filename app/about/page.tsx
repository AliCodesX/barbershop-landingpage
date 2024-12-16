'use client';
import React, { useState } from "react";
import Image from "next/image";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Modal,
    Button,
} from "@mui/material";

const UeberUns = () => {
    const [selectedMitarbeiter, setSelectedMitarbeiter] = useState(null);

    // Daten der Mitarbeiter
    const mitarbeiter = [
        {
            name: "Mojtaba R.",
            rolle: "Filialleiter",
            bild: "/assets/mojtaba.jpg",
            erfahrung:
                "Mojtaba hat seine Ausbildung 2018 erfolgreich abgeschlossen und begeistert seither mit seinen frischen Ideen und seinem Geschick als Friseur. Gemeinsam mit Zobeid führt er den BarberShop und bringt frischen Wind in das Team.",
        },
        {
            name: "Zobeid A.",
            rolle: "Fillailleiter",
            bild: "/assets/zobeid.jpg",
            erfahrung:
                "Zobeid ist seit 2007 ein erfahrener Friseur und hat seine Ausbildung damals erfolgreich abgeschlossen. Im Laufe der Jahre hat er nicht nur sein Handwerk perfektioniert, sondern auch viele zufriedene Kunden gewonnen. Heute ist er der Filialleiter und führt den BarberShop erfolgreich in die Selbstständigkeit.",
        },
    ];

    // Philosophie-Bilder
    const philosophieBilder = [
        { src: "/assets/rasier.jpg", alt: "Ambiente des Ladens" },
        { src: "/assets/stuhl.jpg", alt: "Schneidegeräte" },
    ];

    return (
        <Box sx={{ bgcolor: "white", color: "black", p: 4 }}>
            {/* Titel und Einleitung */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    Über uns
                </Typography>
                <Typography variant="body1">
                    Willkommen in unserem BarberShop! Wir vereinen Tradition und Moderne, um dir den besten Service für Haar und Bart zu bieten.
                </Typography>
            </Box>

            {/* Mitarbeiterkarten */}
            <Box mb={8}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                    gutterBottom
                >
                    Unser Team
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {mitarbeiter.map((person, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
                                <CardMedia>
                                    <Image
                                        src={person.bild}
                                        alt={person.name}
                                        width={300}
                                        height={300}
                                        style={{ objectFit: "cover" }}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        textAlign="center"
                                        gutterBottom
                                    >
                                        {person.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        textAlign="center"
                                    >
                                        {person.rolle}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 2 }}
                                        onClick={() => setSelectedMitarbeiter(person)}
                                    >
                                        Mehr erfahren
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Philosophie */}
            <Box mb={8}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                    gutterBottom
                >
                    Unsere Philosophie
                </Typography>
                <Typography variant="body1" textAlign="center" mb={4}>
                    Unsere Philosophie dreht sich um Qualität, Stil und eine persönliche Note. Wir glauben daran, dass jeder Besuch bei uns ein Erlebnis sein sollte – von der Atmosphäre bis zum perfekten Schnitt.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {philosophieBilder.map((image, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Box>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={300}
                                    style={{ objectFit: "cover", borderRadius: "8px" }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Modal für Mitarbeiterdetails */}
            {selectedMitarbeiter && (
                <Modal
                    open={Boolean(selectedMitarbeiter)}
                    onClose={() => setSelectedMitarbeiter(null)}
                    aria-labelledby="mitarbeiter-modal"
                    aria-describedby="mitarbeiter-details"
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            border: "2px solid #000",
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <Image
                            src={selectedMitarbeiter.bild}
                            alt={selectedMitarbeiter.name}
                            width={300}
                            height={200}
                            style={{ objectFit: "cover", marginBottom: "16px" }}
                        />
                        <Typography
                            id="mitarbeiter-modal"
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom
                        >
                            {selectedMitarbeiter.name}
                        </Typography>
                        <Typography
                            id="mitarbeiter-details"
                            variant="body1"
                            gutterBottom
                        >
                            {selectedMitarbeiter.erfahrung}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={() => setSelectedMitarbeiter(null)}
                        >
                            Schließen
                        </Button>
                    </Box>
                </Modal>
            )}
        </Box>
    );
};

export default UeberUns;
