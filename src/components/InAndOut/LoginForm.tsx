import { useState } from "react";
import type { UserType } from "../../types/UserTypes";

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
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChanger}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChanger}
                />

                <button
                    className="confirmButton"
                >
                    Send
                </button>
            </form>
        </>
    )
}