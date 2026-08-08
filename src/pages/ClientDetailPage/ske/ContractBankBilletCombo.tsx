import { Box, Grid, Typography } from "@mui/material";


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
                sx={{width: '100vw', maxWidth: '420px', marginTop: '10px'}}
            >
                <Grid size={{sm:3, md:3}}>
                    <Typography className="contractValue">
                        {id}
                    </Typography>
                </Grid>

                <Grid size={{sm:3, md:3}}>
                    <Typography className="contractValue">
                        {name}
                    </Typography>
                </Grid>

                <Grid size={{sm:3, md:3}}>
                        <Typography className="contractValue">
                            19/03/2027
                        </Typography>
                </Grid>

                <Grid size={{sm:3, md:3}}>
                    <Box
                        component="img"
                        src="/generals/Back.png"
                        style={{
                            display: 'flex',
                            justifySelf: 'center',
                            cursor: 'pointer'
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}