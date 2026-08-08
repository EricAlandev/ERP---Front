import { Box, Grid, Typography } from "@mui/material";
import type { Integrity } from "../../../../types/UserTypes";

type HeaderClientDetails = {
    id : number;
    email? : string; 
    birthday? : string; 
    integritys : Integrity[]; 
}

export default function HeaderClientDetails({email, birthday, integritys}: HeaderClientDetails){

    return(
        <Box>
            <Typography
                style={{
                    marginTop: '15px',
                    textAlign: 'center'
                }}
            >
                Client Details:
            </Typography>

            <Box>
                <Typography>
                    Name: {email}
                </Typography>

                <Typography>
                    Birthday: {birthday}
                </Typography>

                {integritys?.length > 0 && (
                    <Grid container spacing={1} sx={{width: '40vw'}}>
                        <Typography>Integrity</Typography>
                        {integritys.map((i) => (
                            <Typography>
                                {i.integrity}
                            </Typography>
                        ))}
                    </Grid>
                )}
            </Box>
        </Box>
    )
}