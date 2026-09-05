import { Grid } from "@mui/material";
import TypographyTop from "../../../components/generals/tsxComponents/headerItens/TypographyTop";

type TittleBankBilletCombo = {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    text6?: string;
}

export default function TittleCombo({text1, text2, text3, text4, text5, text6} : TittleBankBilletCombo){

    const arrayTexts = [text1, text2, text3, text4, text5, text6];
    const arrayWithRealValue : string[] = [];

    for(let i = 0; i < 6 ; i++){
        const actualText = arrayTexts[i];
        if(actualText !== "" && actualText){
            arrayWithRealValue.push(actualText);
        }
    }
    
    const sizePerGrid : number = (12 / arrayWithRealValue.length);

    return(
        <>
            {/* Header */}
            <Grid 
                container 
                spacing={2} 
                sx={{width: '100vw', maxWidth: '470px', marginTop: '10px'}}
            >
                {arrayWithRealValue.map((text, index) => (
                    <Grid key={index} size={{sm: sizePerGrid, md: sizePerGrid}}>
                        <TypographyTop text={`${text}`}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}