import {Box, Grid, Typography } from "@mui/material";
import type { SearchUser } from "../../../types/UserTypes";
import Image from "../../../components/generals/tsxComponents/headerItens/Image";

type UserSkeSearch = SearchUser & {
    click: () => void;
}

export default function UserSkeSearch({Email, click} : UserSkeSearch){

    return(
        <Grid
            container 
            spacing={2}
            sx={{width: '100vw', maxWidth: '400px'}}
            onClick={click}
        >
            <Box
                sx={{
                            display: 'flex',
                            width: '100vw',
                            maxWidth: '400px',
                            marginTop: '10px',
                            padding: '10px',
                            border: '2px, solid',
                            borderColor: '#A0A0A0',
                            borderRadius: '8px',
                            cursor: 'pointer'
                }}
            >
                <Grid sx={{sm:8, md: 8, width: '55vw', maxWidth: '350px'}}>
                    <Typography>
                        {Email}
                    </Typography>
                </Grid>

                <Grid sx={{sm:4, md: 4}}>
                    <Image type="contract"/>
                </Grid>
            </Box>
        </Grid>
    )
}