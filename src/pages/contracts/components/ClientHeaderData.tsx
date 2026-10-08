import { Grid, InputLabel, TextField, Typography } from "@mui/material"
import type { dataSimulationContract, preLimits } from "../../../types/BankBillet"


type ClientHeaderData = {
    preData: preLimits | null;
    contrat: dataSimulationContract;
    handleChanger: any;
}

export default function ClientHeaderData({preData, contrat, handleChanger} : ClientHeaderData){

    if(preData === null){
        return(
            <TextField
                id="idClient"
                label="id Conta"
                name="idClient" 
                value={contrat.idClient} 
                onChange={handleChanger}
                type="text"
                required
            />
        )
    }

    return(
        <>
            <Typography sx={{fontSize: "17px",  textAlign: "center", textDecoration: "underline"}}>
                User Data
            </Typography>

            <Grid
                container 
                spacing={2} 
                sx={{width: '100%', maxWidth: '600px', marginTop: '15px'}}
            >

                <Grid size={{xs: 6 , md: 6}}>
                    <InputLabel>Email</InputLabel>

                    <Typography>
                        {preData?.user.email}
                    </Typography>
                </Grid>

                <Grid size={{xs: 6 , md: 6}}>
                    <InputLabel>User Cic</InputLabel>

                    <Typography>
                        {preData?.user.cic}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container 
                spacing={2} 
                sx={{width: '100%', maxWidth: '600px', marginTop: '15px'}}
            >

                <Grid size={{xs: 6 , md: 6}}>
                    <InputLabel>TypeUser</InputLabel>

                    <Typography>
                        {preData?.user.typeUser}
                    </Typography>
                </Grid>

                <Grid size={{xs: 6 , md: 6}}>
                    <InputLabel>Gender</InputLabel>

                    <Typography>
                        {preData?.user.gender}
                    </Typography>
                </Grid>
            </Grid>

            <Typography sx={{ mt: "20px", fontSize: "17px",  textAlign: "center", textDecoration: "underline"}}>
                Loan data
            </Typography>

            <Grid
                container 
                spacing={2} 
                sx={{width: '100%', maxWidth: '600px', marginTop: '15px'}}
            >

                <Grid size={{xs: 6 , md: 6}}>
                    <InputLabel>MaxLoan</InputLabel>

                    <Typography>
                        R$ {preData?.maxLoan.toFixed(2)}
                    </Typography>
                </Grid>

                <Grid size={{xs: 6 , md: 6}}>
                    <InputLabel>Max Installments</InputLabel>

                    <Typography>
                        {preData?.quantityInstallments}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}