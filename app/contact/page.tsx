'use client';

import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Contact = () => {
    const address = "Am Schilfspark 26, 21029 Hamburg";
    const phone = "+49 123 456789";
    const openingHours = "Mo - Sa: 9:00 - 19:00 Uhr";
    const holidayNotice = "An Feiertagen können die Öffnungszeiten abweichen.";

    // Typewriter effect using the hook
    const [text] = useTypewriter({
        words: ["Du kannst jederzeit ohne Termin vorbeikommen."],
        loop: 0, // Loop 0 means it only types once
        delaySpeed: 100,
    });

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Typewriter Text */}
            <Box sx={{ mb: 4 }}>
                <Typography className="text-center" variant="h5" gutterBottom>
                    Besuche uns ohne einen Termin!
                </Typography>
                <Typography className="text-center" variant="h6">
                    {text}
                    <Cursor />
                </Typography>
            </Box>

            {/* Kontaktinformationen */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Kontaktinformationen
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="subtitle1">Adresse</Typography>
                        <Typography variant="body2">{address}</Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ mt: 2 }}>
                    <CardContent>
                        <Typography variant="subtitle1">Telefon</Typography>
                        <Typography variant="body2">{phone}</Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Öffnungszeiten */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Öffnungszeiten
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="subtitle1">Unsere  Öffnungszeiten</Typography>
                        <Typography variant="body2">{openingHours}</Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ mt: 2 }}>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {holidayNotice}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default Contact;
