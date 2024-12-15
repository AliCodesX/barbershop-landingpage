import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from "@mui/material";

const staff = [
    { name: "Ali", role: "Barber", img: "/images/ali.jpg" },
    { name: "Sara", role: "Stylistin", img: "/images/sara.jpg" },
    { name: "Hassan", role: "Manager", img: "/images/hassan.jpg" },
];

const openingHours = [
    { day: "Montag - Freitag", hours: "09:00 - 18:00" },
    { day: "Samstag", hours: "10:00 - 16:00" },
    { day: "Sonntag", hours: "Geschlossen" },
];

const Contact = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Kontakt
            </Typography>

            {/* Öffnungszeiten */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Öffnungszeiten
                </Typography>
                <Grid container spacing={2}>
                    {openingHours.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {item.day}
                                    </Typography>
                                    <Typography variant="body2">{item.hours}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Mitarbeiter */}
            <Box>
                <Typography variant="h5" gutterBottom>
                    Unsere Mitarbeiter
                </Typography>
                <Grid container spacing={2}>
                    {staff.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined" sx={{ textAlign: "center" }}>
                                <CardContent>
                                    <Avatar
                                        src={member.img}
                                        alt={member.name}
                                        sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                                    />
                                    <Typography variant="h6">{member.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {member.role}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;
