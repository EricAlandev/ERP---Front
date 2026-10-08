import React, { useEffect, useState } from "react";
import type { dataSimulationContract, preLimits } from "../../types/BankBillet";
import {Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { LT, MT } from "../bankBillets/constants/PageBankBilletsValue";
import ErrorPopUp from "../../components/popUp/errorPopUp";
import ClientHeaderData from "./components/ClientHeaderData";


type GiveBoletos = { 
    send: (contract: dataSimulationContract) => void;
    preData: preLimits | null;
}

export default function GenerateCreditOptions({ send, preData }: GiveBoletos) {

    const [installments, setInstallments] = useState<number[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [contrat, setContrat] = useState<dataSimulationContract>({
        idClient: "", 
        bankBilletType: "", 
        price: "",
        QuantityInstallments: ""
    });

    const handleChanger = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setContrat((c : dataSimulationContract) => (
            {...c, [name] : value}
        ));

    };
    

    const handleSubmit = (e: React.SubmitEvent) => {
        try {
            e.preventDefault();
            setLoading(true);

            if((contrat?.price && preData?.maxLoan) && Number(contrat?.price) > preData?.maxLoan){
                popPopUp(`Max price for client loan is R$: ${preData?.maxLoan || 0} ` );
                return null;
            }

            send(contrat);
        } 
        catch (error : any) {
            popPopUp(`${error?.message}` );
        } 
        
        finally{
            setLoading(false)
        }
    }

    //popUp function
    const popPopUp = (message : string) => {
        setError(true);
        setErrorMessage(message)
    }

    const generateInstallments = () => {
        const array = [];
        const quantityInstallments = (preData?.quantityInstallments) ? preData?.quantityInstallments : -1;

        for(let i = 0; i < quantityInstallments; i++){
            array.push(i + 1);
        }

        setInstallments(array);
    }

    useEffect(() => {
        generateInstallments();
    }, [preData])

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="mt-10"
            >
                    <ClientHeaderData
                        preData={preData}
                        contrat={contrat}
                        handleChanger={handleChanger}
                    />

                    {preData !== null && (
                        <>
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
                            {preData?.quantityInstallments > 0 &&(
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
                        </>
                    )}
        
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


            <ErrorPopUp
                error={error}
                setError={setError}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
            />
        </>
    );
}