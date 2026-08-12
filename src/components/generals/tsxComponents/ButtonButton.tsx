import { Button } from "@mui/material";

type BlackButton = {
    valueOnClick?: any;
    text: string;
}

export default function BlackButton({text, valueOnClick} : BlackButton){

    return(
        <>
            <Button
                onClick={valueOnClick}
                type="submit"
                variant="contained"
                sx={{
                    mt: '10px',
                    color: 'white',
                    backgroundColor: 'black'
                }}
            >
                    {text}
            </Button>
        </>
    )
}