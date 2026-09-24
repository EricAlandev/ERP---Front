import { Typography } from "@mui/material";


type TextError = {
    text: string;
}

export default function TextError({text} : TextError){

    return(
        <Typography
            sx={{
                fontSize: '13px',              
                color: '#FF3333'
            }}
        >
            {text}
       </Typography>
    )
}