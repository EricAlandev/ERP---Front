import React, { useEffect, useState } from "react";
import type { dataSimulationContract } from "../../types/BankBillet";
import { LT, MT } from "../bankBillets/constants/PageBankBilletsValue";
import {Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";


type GiveBoletos = { 
    send: (contract: dataSimulationContract) => void;
    simulationData: dataSimulationContract | null;
}

export default function GenerateCreditOptions({ send, simulationData }: GiveBoletos) {

    const [contrat, setContrat] = useState<dataSimulationContract>({
        idClient: "", 
        bankBilletType: "", 
        price: "",
        QuantityInstallments: ""
    });

    const [installments, setInstallments] = useState<number[]>([]);
    
    const handleChanger = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setContrat((c : dataSimulationContract) => {
            const object : any = {...c, [name] : value};

            if(name === "price"){
                object.quantityInstallments = ""
            }

            return (object);
        });

    };

    const quantityInstallment = Number(contrat?.QuantityInstallments);

    const defineInstallments = () => {
        if(quantityInstallment && quantityInstallment > 0){
            const arrayInstallments : number[] = [];

            for(let i = 0; i < quantityInstallment; i++){
                arrayInstallments.push(i + 1);
            }

            setInstallments(arrayInstallments);
        }
    }

    console.log("simulation data", simulationData);

    useEffect(() => {
        defineInstallments();
    }, [simulationData])

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

                    <Grid container spacing={2} sx={{width: '100%', maxWidth: '600px', marginTop: '15px'}}>

                        <Grid size={{xs: 6, md:6}}>
                            <InputLabel id="bankBilletType">
                                Boleto types
                            </InputLabel>

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

                            <InputLabel id="Total Price">
                                Loan Price
                            </InputLabel>

                            <TextField
                                id="price"
                                name="price"
                                value={contrat.price}
                                onChange={handleChanger}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        spacing={2}
                        sx={{
                            width: '100%',
                            maxWidth: '600px',
                            marginTop: '15px'
                        }}
                    >
                         <Grid sx={{sm: 6, md: 6}}>
                            {contrat?.QuantityInstallments != null  && installments.length > 0 &&(
                                <>
                                    <InputLabel>Installments</InputLabel>
                                    <Select
                                        id="quantityInstallments"
                                        name="quantityInstallments"
                                        value={contrat?.QuantityInstallments}
                                        onChange={handleChanger}
                                        sx={{
                                            width: '30vw',
                                            maxWidth: '170px'
                                        }}
                                    >
                                        {installments?.map((iNumber, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={iNumber}
                                                >
                                                    {iNumber}x
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </>
                            )}
                    
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