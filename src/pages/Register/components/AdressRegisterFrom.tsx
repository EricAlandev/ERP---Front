import { Box, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import type { StateCombo } from "../../../types/CombosTypes";
import { getStatesCombos } from "../../../server/ComboApi";


export default function AdressRegisterFrom(){

    const [states, setStates] = useState<StateCombo[]>([]);

    const handleCombos = async () => {
        handleStateCombo();
    }

    const handleStateCombo = async () => {
        try {
            const states : StateCombo[]  = await getStatesCombos();

            setStates(states);
        } catch (error) {
            
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
            <form>
                <FormLabel>State</FormLabel>
                <Select>
                    <MenuItem value=""></MenuItem>
                </Select>
            </form>
        </Box>
    )
}