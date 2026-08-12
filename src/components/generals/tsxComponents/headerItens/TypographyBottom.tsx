import {Typography } from "@mui/material";


type TypographyBottom = {
    text: string;
}

export default function TypographyBottom({text} : TypographyBottom){

    return(
        <Typography
            sx={{
                textAlign: "center",
                fontSize: "14.5px"
            }}
        >
            {text}
        </Typography>
    )
}