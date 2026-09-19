import { useState } from "react"
import type { UserType } from "../../../types/UserTypes";
import { Box, FormLabel, InputLabel, TextField, Typography } from "@mui/material";
import BlackButton from "../../../components/generals/tsxComponents/ButtonButton";
import { ADRESS_REGISTER } from "../const/RegisterConst";
import TextError from "../../../components/generals/tsxComponents/error/TextError";


type RegisterForm = {
    nextPage: (nextPage: string , data: UserType) => void;
}

export default function     RegisterForm({nextPage} : RegisterForm){

    const [userData, setUserData] = useState<UserType>({email: "", password: "", birthday: ""});
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<String | null>(null);
    
    const handleChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserData((e) => (
           { ...e, [name] : value}
        ))
    }

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        const blankFields : boolean = verifyBlankFields();

        if(!blankFields){
            nextPage(ADRESS_REGISTER, userData);
        }
    }

    const verifyBlankFields = () => {

        let message : any | null = null;

        //veriffications + error message
        if(!userData.email || (userData?.email && userData?.email.trim()) === "" || userData?.email === null){
            message = "Email not be blank";
        }

        else if(!userData.password || (userData?.password && userData?.password.trim()) === "" || userData?.password === null){
            message = "Password not be blank";
        }

        else if(!userData.birthday || (userData?.birthday && userData?.birthday.trim()) === "" || userData?.birthday === null){
            message = "Birthday not be blank";
        }

        else{
            message = null;
        }

        //set the error;
        if(message !== null && message.trim() !== ""){
            setError(true)
            setErrorMessage(message);
            return true;
        }

        else{
            return false;
        }
    }

    return(
        <Box>
            <InputLabel
                sx={{
                    mt: '10px',
                    textAlign: 'center'
                }}
            >
                Register
            </InputLabel>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2"
            >

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChanger}
                    />

                    <InputLabel htmlFor="password">Password</InputLabel>
                    <TextField
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChanger}
                    />

                    <FormLabel htmlFor="date">BirthDay</FormLabel>
                    <TextField
                        id="date"
                        type="date"
                        name="birthday"
                        value={userData.birthday}
                        onChange={handleChanger}
                    />

                    {error && (
                        <TextError text={`${errorMessage}`}/>
                    )}
                    
                <BlackButton text="Next Step"/>
            </form>
        </Box>
    )
}