import { Grid, TextField, Typography } from "@mui/material";
import type { Installment } from "../../../../types/BankBillet";



export default function InstallmentComponent({id, price, stats, typecontract, expirationdate} : Installment){

    return(
        <>
            <Grid
                container
                spacing={2}
                sx={{display: 'flex' , width: '100vw', maxWidth: '400px'}}
            >
                <Grid sx={{sm: 2.4, md: 2.4}}>
                    <Typography>
                        {id}
                    </Typography>
                </Grid>

                <Grid sx={{sm: 2.4, md: 2.4}}>
                    <Typography>
                        {price}
                    </Typography>
                </Grid>

                <Grid sx={{sm: 2.4, md: 2.4}}>
                    <Typography>
                        {stats}
                    </Typography>
                </Grid>

                <Grid sx={{sm: 2.4, md: 2.4}}>
                    <Typography>
                        {typecontract}
                    </Typography>
                </Grid>

                <Grid sx={{sm: 2.4, md: 2.4}}>
                    <Typography>
                        {expirationdate}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}