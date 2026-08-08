import { Button } from "@mui/material";

type BlackButton = {
    text: string;
}

export default function BlackButton({text} : BlackButton){

    return(
        <>
            <Button
                type="submit"
                variant="contained"
                className="confirmButton"
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