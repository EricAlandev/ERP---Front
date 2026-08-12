import { Box, Grid } from "@mui/material";
import TypographyBottom from "../../../components/generals/tsxComponents/headerItens/TypographyBottom";
import Image from "../../../components/generals/tsxComponents/headerItens/Image";

type ContractBankBilletCombo = {
    id: number;
    name: string;
    date: string;
}

export default function ContractBankBilletCombo({id, name, date} : ContractBankBilletCombo){

    return(
        <Box>
            <Grid 
                container 
                spacing={2} 
                sx={{width: '100vw', maxWidth: '470px', marginTop: '10px'}}
            >
                <Grid size={{sm:3, md:3}}>
                    <TypographyBottom text={`${id}`}/>
                </Grid>

                <Grid size={{sm:3, md:3}}>
                    <TypographyBottom text={`${name}`}/>
                </Grid>

                <Grid size={{sm:3, md:3}}>
                    <TypographyBottom text={`19/03/2027`}/>
                </Grid>

                <Grid size={{sm:3, md:3}}>
                    <Image/>
                </Grid>
            </Grid>
        </Box>
    )
}