import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Preise = () => {
    const services = [
        { name: "Haarschnitt", price: "€25" },
        { name: "Bart trimmen", price: "€15" },
        { name: "Komplettpaket", price: "€35" },
    ];

    return (
        <Box sx={{ bgcolor: "white", color: "black", p: 4 }}>
            <Typography variant="h3" gutterBottom>
                Unsere Preise
            </Typography>
            <TableContainer component={Paper} sx={{ border: "1px solid black", mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold", color: "black" }}>Service</TableCell>
                            <TableCell sx={{ fontWeight: "bold", color: "black" }}>Preis</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service, index) => (
                            <TableRow key={index}>
                                <TableCell>{service.name}</TableCell>
                                <TableCell>{service.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Preise;
