import { useState } from "react"
import type { UserType } from "../../types/UserTypes";


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

        console.log(userData);
    }

    return(
        <div className="flex flex-col">
            <h2 className="text-center">Register</h2>

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

                <label>BirthDay</label>
                <input
                    type="date"
                    name="birthday"
                    value={userData.birthday}
                    onChange={handleChanger}
                />

                <button
                    type="submit"
                    className="confirmButton"
                >
                    Send
                </button>
            </form>
        </div>
    )
}