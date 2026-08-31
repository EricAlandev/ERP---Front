import { Box } from "@mui/material";

type ButtonBotton = {
    type?: string;
    generateContract? : () => void; 
}

export default function Image({type, generateContract} : ButtonBotton){

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
            onClick={generateContract}
            style={{
                display: 'flex',
                justifySelf: 'center',
                cursor: 'pointer'
            }}
        />
    )
}