import { Box, Button, FormLabel, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import type { StateCombo } from "../../../types/CombosTypes";
import { getStatesCombos } from "../../../server/ComboApi";
import type { UserType } from "../../../types/UserTypes";
import { MAIN_REGISTER, SEND_REGISTER } from "../const/RegisterConst";
import { findCEP } from "../../../server/CepApi";
import { AnimatePresence } from "framer-motion";
import Motion from "../../../components/mui/generals/Motion";
import BlackButton from "../../../components/mui/generals/ButtonButton";
import TextErrorAbso from "../../../components/mui/error/TextErrorAbso";
import MaskedTextFIeld from "../../../components/mui/generals/MaskedTextField";


type AdressRegisterFrom = {
    nextPage: (nextPage: string, data: UserType | null) => void;
}

export default function AdressRegisterFrom({nextPage} : AdressRegisterFrom){

    const [data, setData] = useState<UserType>({adress: "", neighborhood: "", state: "", cep: ""});
    const [states, setStates] = useState<StateCombo[]>([]);
    const [cepError, setCepError] = useState<boolean>();
    const [cepErrorMessage, setCepErrorMessage] = useState<string | null>();

    const handleCombos = async () => {
        handleStateCombo();
    }

    const handleStateCombo = async () => {
        try {
            const statesValue : StateCombo[]  = await getStatesCombos();

            setStates(statesValue);

        } catch (error) {
            
        }
    }

    const handleComeBack = () => {
        nextPage(MAIN_REGISTER, null);
    }

    const sendForm = () => {
        nextPage(SEND_REGISTER, data);
    }

    const handleChanger = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name ,value} = e.target;
        setData((d) => (
            {...d, [name] : value}
        ))
        
        if(name === "cep"){
            const cleanCEP = value.replace(".", "").trim();

            console.log("cep", cleanCEP, cleanCEP.length)
            if(cleanCEP.length === 8 ){
                await handleCEP(cleanCEP)
            }

            else{
                setCepError(false);
                setCepErrorMessage(null);
            }
        }
    }

    const handleCEP = async (cep: string) => {
        try {
            const cepProps : any = await findCEP(cep)
            setData(() => (
                cepProps
            ));
        } catch (error) {
            setCepError(true);
            setCepErrorMessage("Cep not found");
        }
    }

    useEffect(() => {
        handleCombos();
    }, []);

    return(
        <Box
            sx={{
                mt: '10px',
                textAlign: 'center'
            }}
        >

            <Button
                onClick={handleComeBack}
            >
                <Box 
                    component={"img"}
                    src="/generals/Back.png"
                >
                    
                </Box>
            </Button>

                <form
                    onSubmit={sendForm}
                >
            <Grid
                container
                sx={{
                    width: "100vh",
                    maxWidth: "415px",
                    gap: "8px",
                    marginTop: '30px'
                }}
            >
                        <Grid
                            size={{sm: 5.8, md: 5.8}}
                            sx={{
                                position: 'relative'
                            }}
                        >
                                <FormLabel htmlFor="cep">CEP</FormLabel>

                                <MaskedTextFIeld
                                    id="cep"
                                    name="cep"
                                    value={data.cep}
                                    onChange={handleChanger}
                                    mask="00000.000"
                                />

                                <AnimatePresence>
                                    {cepError && (
                                        <Motion>
                                            <TextErrorAbso
                                                text="CEP não encontrado"
                                            />
                                        </Motion>
                                    )}
                                </AnimatePresence>
                            </Grid>

                            <Grid
                                size={{sm: 5.8, md: 5.8}}
                            >
                                <FormLabel>State</FormLabel>
                                <Select
                                    id="state"
                                    name="state" 
                                    value={data.state}
                                    onChange={handleChanger}
                                    fullWidth   
                                >
                                    <MenuItem 
                                        value={""}
                                        selected
                                    >
                                        Choose a State
                                    </MenuItem>

                                    {states.map((s, index) => (
                                        <MenuItem key={index} value={`${s.State}`}>
                                            {s?.State}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                    </Grid>
                </form>

            <Grid
                container
                sx={{
                    width: '100vw',
                    maxWidth: '410px',
                    marginTop: '25px'
                }}
            >
                <Grid
                    size={{sm: 12, md: 12}}
                >
                    <TextField
                        id="neighborhood"
                        name="neighborhood"
                        value={data.neighborhood}
                        onChange={handleChanger}
                        placeholder="type the neighborhood"
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Grid
                container
                sx={{
                    width: '100vw',
                    maxWidth: '415px',
                    marginTop: '25px',
                    gap: '8px',
                }}
            >
                <Grid
                    size={{sm: 5.8, md: 5.8}}
                >
                    <TextField
                        id="adress"
                        name="adress"
                        value={data.adress}
                        onChange={handleChanger}
                        placeholder="type your adress"
                    />
                </Grid>

                <Grid
                    size={{sm: 5.8, md: 5.8}}
                >
                    <TextField
                        id="adressNumber"
                        name="adressNumber"
                        value={data.adressNumber}
                        onChange={handleChanger}
                        placeholder="Adress Number"
                    />
                </Grid>

                <BlackButton 
                    valueOnClick={sendForm}
                    text="Send"
                />
            </Grid>
        </Box>
    )
}