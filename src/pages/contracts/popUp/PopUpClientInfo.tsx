import { Box, Grid, Typography } from "@mui/material";
import type { Stats } from "../../../types/BankBillet"

type PopUpClientInfo = {
    name?: string;
    stats?: Stats[];
    closePopUp: any;
}

export default function PopUpClientInfo({name, stats, closePopUp} : PopUpClientInfo){

    let Stats: string = "";

    if(stats){
        for(let i = 0; i < stats?.length; i++){
            if(i + 1 == stats.length){
                Stats += stats[i];
            }

            else{
                Stats += stats[i] + ", ";
            }
        }
    }

    return(
        <>
            {/*Overlay */}
            <Box onClick={closePopUp}  className="fixed inset-0 bg-black opacity-70"></Box>

            {/*PopUp */}
            <Box
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vh] bg-[white] rounded-md"
            >

                {/*Header */}
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'end',
                        width: 'full'
                    }}
                >
                    <Box
                        component="img"
                        src="/generals/Back.png"
                        onClick={closePopUp}
                        sx={{
                            mt:'5px',
                            mr: '6px',
                            cursor: 'pointer'
                        }}
                    />
                </Box>

                {/*Tittle */}
                <Typography className="text-center">Informations Client</Typography>

                {/*body of the popUp*/}
                <Box className="w-[40vw] mx-auto mt-2.5 text-[15px]">
                    <Grid container spacing={2} sx={{width: '100%', maxWidth: '600px'}}>
                        <Typography>Client Name:</Typography>
                        <Typography>{name}</Typography>
                    </Grid>

                    <Grid container spacing={2} sx={{width: '100%', maxWidth: '600px'}}>
                            <Typography>Client Stats:</Typography>
                                           
                            <Typography>[{Stats}]</Typography>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}