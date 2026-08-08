import {Grid, Typography } from "@mui/material";
import type { SearchUser } from "../../../types/UserTypes";

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
            <Grid sx={{sm:12, md: 12}}>
                <Typography
                    style={{
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
                    {Email}
                </Typography>
            </Grid>
        </Grid>
    )
}