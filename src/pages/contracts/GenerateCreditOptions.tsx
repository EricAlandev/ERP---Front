import React, { useState } from "react";
import type { dataForSimulationContract } from "../../types/BankBillet";
import { LT, MT } from "../bankBillets/constants/PageBankBilletsValue";
import {Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";


type GiveBoletos = { 
    send: (contract: dataForSimulationContract) => void;
}

export default function GenerateCreditOptions({ send }: GiveBoletos) {

    const [contrat, setContrat] = useState<dataForSimulationContract>({
        idClient: "", 
        bankBilletType: "", 
        price: "",
    });
    
    const handleChanger = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setContrat((c : dataForSimulationContract) => ({
            ...c, 
            [name]: value
        }));
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    send(contrat);
                }}
                className="mt-10"
            >
                    <TextField
                        id="idClient"
                        label="id Conta"
                        name="idClient" 
                        value={contrat.idClient} 
                        onChange={handleChanger}
                        type="text"
                        required
                    />

                    <InputLabel id="bankBilletType">Boleto types</InputLabel>

                    <Grid container spacing={2} sx={{width: '100%', maxWidth: '600px'}}>
                        <Grid size={{xs: 6, md:6}}>
                            <Select 
                                id="bankBilletType"
                                name="bankBilletType" 
                                value={contrat.bankBilletType} 
                                onChange={handleChanger}
                                fullWidth
                                required
                            >
                                    <MenuItem value="">Select a type...</MenuItem>
                                    <MenuItem value={`${LT}`}>Less Taxes</MenuItem>
                                    <MenuItem value={`${MT}`}>More Taxes</MenuItem>
                            </Select>
                        </Grid>

                        <Grid size={{xs:6, md:6}}>
                            <TextField
                                id="price"
                                name="price"
                                label="Total Price"
                                value={contrat.price}
                                onChange={handleChanger}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>

                    <Button 
                        variant="contained" 
                        sx={{
                            mt: '20px',
                            color: 'white',
                            backgroundColor: 'black'
                        }}
                        type="submit"
                    >
                        Create
                    </Button>
            </form>
        </>
    );
}