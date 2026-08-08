import { useState } from "react";
import type { Stats } from "../../../types/BankBillet";
import PopUpClientInfo from "../popUp/PopUpClientInfo";
import { SimulationValue } from "../constants/PageValues";
import { Box, Button, Grid, Typography } from "@mui/material";

type HeaderMakeContract = {
    setActualPage: any;
    name?: string;
    stats?: Stats[];
    price?: number;
}

export default function HeaderMakeContract({setActualPage, name, stats, price} : HeaderMakeContract){

    const [openPopUp, setOpenPopUp] = useState<boolean>(false);

    const handlePopUp = () => {
        setOpenPopUp(!openPopUp);
    }

    return(
            <Box>
                <Box
                    component="img"
                    src="/generals/Back.png"
                    onClick={() => {
                        setActualPage(SimulationValue)
                    }}
                    className="backButton cursor-pointer"
                />

                <Grid container sx={{
                    display: 'flex',
                    width: '100%', 
                    maxWidth : '600px'
                }}
                >
                       <Grid
                            size={{sm: 8, md: 8}}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '10px',
                                gap: '20px'
                            }}
                       >
                            <Typography>
                                Simulation Values
                            </Typography>
                       </Grid>

                        <Grid
                            size={{sm: 4, md: 4}}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '10px',
                                gap: '20px'
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={handlePopUp}
                                sx={{
                                    minWidth: '120px',
                                    ml: '20px',
                                    color: 'white',
                                    backgroundColor: 'black'
                                }}
                            >
                                CLient Info
                            </Button>
                        </Grid>
                </Grid>

                <Typography sx={{mt: '2px'}}>
                    Client: {name}
                </Typography>
         
                {openPopUp && (
                    <PopUpClientInfo 
                        name={name} 
                        stats={stats} 
                        closePopUp={handlePopUp}
                    />
                )}
            </Box>
    )
}