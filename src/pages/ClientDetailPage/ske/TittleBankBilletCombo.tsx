import { Grid } from "@mui/material";
import TypographyTop from "../../../components/generals/tsxComponents/headerItens/TypographyTop";

type TittleBankBilletCombo = {
    type: string;
}

export default function TittleBankBilletCombo({type} : TittleBankBilletCombo){

    return(
        <>
            {/* Header */}
            <Grid 
                container 
                spacing={2} 
                sx={{width: '100vw', maxWidth: '470px', marginTop: '10px'}}
            >
                <Grid size={{sm: 3, md:3}}>
                    <TypographyTop text={`${type} Number`}/>
                </Grid>

                <Grid size={{sm: 3, md:3}}>
                    <TypographyTop text={`${type}`}/>
                </Grid>

                <Grid size={{sm: 3, md:3}}>
                    <TypographyTop text={`Date`}/>
                </Grid>

                <Grid size={{sm: 3, md:3}}>
                    <TypographyTop text={`imp. contrato`}/>
                </Grid>
            </Grid>
        </>
    )
}