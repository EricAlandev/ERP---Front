import { Box } from "@mui/material";

type ButtonBotton = {
    type?: string;
}

export default function Image({type} : ButtonBotton){

    let path = "/generals/Back.png"; 

    switch (type) {
        case "contract":
            path = "/generals/Back.png";
            break;
    
        default:
            path = "/generals/Back.png"; 
            break;
    }

    return(
        <Box
            component="img"
            src={path}
            style={{
                display: 'flex',
                justifySelf: 'center',
                cursor: 'pointer'
            }}
        />
    )
}