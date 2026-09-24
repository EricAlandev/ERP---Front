import { Typography } from "@mui/material";


type TextError = {
    text: string;
}

export default function TextErrorAbso({text} : TextError){

    return(
        <Typography
            sx={{
                position: 'absolute',
                right: '0',
                bottom: '-20px',
                mt: '5px',
                fontSize: '13px',              
                color: '#FF3333'
            }}
        >
            {text}
       </Typography>
    )
}