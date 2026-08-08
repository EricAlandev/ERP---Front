import { Typography } from "@mui/material";


type TypographyTop = {
    text: string;
}

export default function TypographyTop({text} : TypographyTop){

    return(
        <>
            <Typography
                sx={{
                    padding: '6px',
                    color: 'white',
                    fontSize: '15px',
                    textAlign: 'center',
                    backgroundColor: 'black'
                }}
            >
                {text}
            </Typography>
        </>
    )
}