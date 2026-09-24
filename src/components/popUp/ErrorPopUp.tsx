import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";


type ErrorPopUp = {
    error: boolean;
    errorMessage: string | null;
    setError: any;
    setErrorMessage: any;
}

export default function ErrorPopUp({error, errorMessage,  setError, setErrorMessage}: ErrorPopUp){

    const handleClosePopUp = () => {
        setError(false);
        setErrorMessage(null);
    }

    return(
        <>
            <Dialog
                open={error}
                onClose={handleClosePopUp}
                slotProps={{
                    paper: {   
                        sx: {
                            width: '50vw',
                            height: '30vh',
                            maxWidth: '300px',
                            maxHeight: '300px',

                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }
                
                    },
                    backdrop: {
                        sx: {
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(0,0,0,0,7)',
                        }
                    }
                }}  
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingRight: '10px',
                        marginBottom: '25px'
                    }}
                >
                    <DialogTitle
                        sx={{
                            display: 'flex',
                            textAlign: 'center'
                        }}
                    >
                        Error!
                    </DialogTitle>

                    <Box
                        component={"img"}
                        src="/generals/close.png"
                        onClick={handleClosePopUp}
                        sx={{
                            cursor: 'pointer'
                        }}
                    >

                    </Box>
                </Box>

                <DialogContent sx={{fontSize: '20px'}}>
                    {errorMessage}
                </DialogContent>
            </Dialog>
        </>
    )
}