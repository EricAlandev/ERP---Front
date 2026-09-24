import { Grid, Typography } from "@mui/material";
import type { Installment } from "../../../../types/BankBillet";
import TypographyBottom from "../../../../components/mui/headerItens/TypographyBottom";
import Image from "../../../../components/mui/headerItens/Image";

export default function InstallmentComponent({id, price, stats, typecontract, expirationdate} : Installment){

    return(
        <>
            <Grid
                container
                spacing={2}
                sx={{display: 'flex', width: '100%', maxWidth: '650px'}}
            >
                <Grid size={{sm: 2, md: 2}}>
                    <TypographyBottom text={`${id}`}/>
                </Grid>

                <Grid size={{sm: 2, md: 2}}>
                    <TypographyBottom text={`${price}`}/>
                </Grid>

                <Grid size={{sm: 2, md: 2}}>
                    <TypographyBottom text={`${stats}`}/>
                </Grid>

                <Grid size={{sm: 2, md: 2}}>
                    <TypographyBottom text={`${typecontract}`}/>
                </Grid>

                <Grid size={{sm: 2, md: 2}}>
                    <TypographyBottom text={`09/06/2024`}/>
                </Grid>

                <Grid size={{sm: 2, md: 2}}>
                    <Image
                        type="print"
                    />
                </Grid>
            </Grid>
        </>
    )
}