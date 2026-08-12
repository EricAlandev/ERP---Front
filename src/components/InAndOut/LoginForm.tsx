import { useState } from "react";
import type { UserType } from "../../types/UserTypes";
import {InputLabel, TextField } from "@mui/material";
import BlackButton from "../generals/tsxComponents/ButtonButton";

type LoginForm = {
    send: (data: UserType) => void;
}

export default function LoginForm({send} : LoginForm){

    const [userData, setUserData] = useState<UserType>({email: "", password: ""});
        
    const handleChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserData((e) => (
            { ...e, [name] : value}
        ))
    
        console.log(userData);
    }

    return(
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    send(userData);
                }}
                className="flex flex-col"
            >
                <InputLabel id="email">Email</InputLabel>

                <TextField
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChanger}
                />

                <InputLabel id="email">Password</InputLabel>
   
                <TextField
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChanger}
                />

                <BlackButton text="Send"/>
            </form>
        </>
    )
}