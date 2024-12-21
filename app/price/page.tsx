import React from "react";
import { Box, Typography, Paper, Divider, Grid } from "@mui/material";
import './BarberStyles.css'; // CSS für Animation

const Preise = () => {
    const services = [
        { name: "Waschen, Schneiden, Föhnen", description: "Mit Epilierer", price: "€18" },
        { name: "Trockenschnitt", description: "Schnell und präzise", price: "€15" },
        { name: "Momo & Zozo Paket", description: "All-inclusive-Erlebnis", price: "€30" },
        { name: "Bartschnitt mit Konturenrasur", description: "Für perfekte Linien", price: "€10" },
        { name: "Kinderhaarschnitt bis 10 Jahre", description: "Besonders kinderfreundlich", price: "€10" },
        { name: "Augenbrauen zupfen", description: "Für den perfekten Look", price: "€5" },
    ];

    return (
        <Box sx={{ p: 3}}>
            {/* Überschrift mit Barber-Stange */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-black m-10">Unsere Preisliste</h2>

            </div>

            {/* Preisliste */}
            <Paper className="bg-richBlack text-white  opacity-2 rounded-xl border-white shadow-2xl p-3 ">
                {services.map((service, index) => (
                    <Box key={index}>
                        <Grid container alignItems="center" sx={{py: 2}}>
                            <Grid item xs={1}>
                                <div className="small-barber-pole"></div>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                                    {service.name}
                                </Typography>
                                <Typography variant="body2" sx={{color: "gray"}}>
                                    {service.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sx={{textAlign: "right"}}>
                                <Typography variant="h6" sx={{fontWeight: "bold", color: "white"}}>
                                    {service.price}
                                </Typography>
                            </Grid>
                        </Grid>
                        {index < services.length - 1 && <Divider/>}
                    </Box>
                ))}
            </Paper>
        </Box>
    );
};

export default Preise;
