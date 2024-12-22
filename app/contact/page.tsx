'use client';

import React from "react";
import { Container, Typography, Box, Card, CardContent, Grid } from "@mui/material";
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
        <Container className="mt-10 p-6" maxWidth="lg" sx={{ py: 4, backgroundColor: '#1f1f1f', borderRadius: 2, boxShadow: 4 }}>
            {/* Typewriter Text */}
            <Box sx={{ mb: 4 }}>
                <Typography className="text-center" variant="h4" gutterBottom sx={{ color: "#fff", fontWeight: 'bold' }}>
                    Besuche uns ohne einen Termin!
                </Typography>
                <Typography className="text-center" variant="h6" sx={{ color: "#bdbdbd" }}>
                    {text}
                    <Cursor />
                </Typography>
            </Box>

            {/* Kontaktinformationen */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: "#fff", fontWeight: 'bold' }}>
                    Kontaktinformationen
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card className="bg-richBlack text-white" variant="outlined" sx={{ borderRadius: 2, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 'bold' }}>Adresse</Typography>
                                <Typography variant="body2" sx={{ color: "#bdbdbd" }}>{address}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className="bg-richBlack text-white" variant="outlined" sx={{ borderRadius: 2, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 'bold' }}>Telefon</Typography>
                                <Typography variant="body2" sx={{ color: "#bdbdbd" }}>{phone}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Öffnungszeiten */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: "#fff", fontWeight: 'bold' }}>
                    Öffnungszeiten
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card className="bg-richBlack text-white" variant="outlined" sx={{ borderRadius: 2, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 'bold' }}>Unsere Öffnungszeiten</Typography>
                                <Typography variant="body2" sx={{ color: "#bdbdbd" }}>{openingHours}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className="bg-richBlack text-white" variant="outlined" sx={{ borderRadius: 2, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
                                    {holidayNotice}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;
