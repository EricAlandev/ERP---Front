import { Box, Button, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import type { StateCombo } from "../../../types/CombosTypes";
import { getStatesCombos } from "../../../server/ComboApi";
import type { UserType } from "../../../types/UserTypes";
import { MAIN_REGISTER, SEND_REGISTER } from "../const/RegisterConst";


type AdressRegisterFrom = {
    nextPage: (nextPage: string, data: UserType | null) => void;
}

export default function AdressRegisterFrom({nextPage} : AdressRegisterFrom){

    const [data, setData] = useState<UserType>({adress: "", neighborhood: "", state: ""});
    const [states, setStates] = useState<StateCombo[]>([]);

    const handleCombos = async () => {
        handleStateCombo();
    }

    const handleStateCombo = async () => {
        try {
            const statesValue : StateCombo[]  = await getStatesCombos();

            console.log("States values", statesValue);

            setStates(statesValue);

            console.log("set state value", states);

        } catch (error) {
            
        }
    }

    const handleComeBack = () => {
        nextPage(MAIN_REGISTER, null);
    }

    const sendForm = () => {
        nextPage(SEND_REGISTER, data);
    }

    const handleChanger = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name ,value} = e.target;
        setData((d) => (
            {...d, [name] : value}
        ))
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
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'  
                    }}
                >
                    <FormLabel>State</FormLabel>
                    <Select
                    id="state"
                    name="state" 
                    value={data.state}
                    onChange={handleChanger}
                    >
                        <MenuItem 
                            value={""}
                        >
                            Choose a State
                        </MenuItem>

                        {states.map((s) => (
                            <MenuItem value={`${s.State}`}>
                                {s?.State}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            </form>
        </Box>
    )
}