import { useState } from "react"
import type { UserType } from "../../types/UserTypes";
import { Box, FormLabel, InputLabel, TextField } from "@mui/material";
import BlackButton from "../generals/tsxComponents/ButtonButton";


type RegisterForm = {
    send: (data: UserType) => void;
}

export default function RegisterForm({send} : RegisterForm){

    const [userData, setUserData] = useState<UserType>({email: "", password: "", birthday: ""});
    
    const handleChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserData((e) => (
           { ...e, [name] : value}
        ))
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
                onSubmit={(e) => {
                    e.preventDefault();
                    send(userData);
                }}
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

                <BlackButton text="Send"/>
            </form>
        </Box>
    )
}