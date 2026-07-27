import React, { useState } from "react"
import type { SearchUser } from "../../../types/UserTypes";

type SearchPage = {
    send: (data: SearchUser) => void;
}

export default function SearchPage({send} : SearchPage){

    const [data, setData] = useState<SearchUser>({Email: "", IdUser : ""});


    const handleChanger = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setData((d) => (
            {...d, [name] : value}
        )) 
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        send(data);
    }

    return(
        <>
            <form
                onSubmit={handleSubmit}
                className="flex h-max items-center gap-2 mt-3"
            >
                <input
                    name="IdUser"
                    value={data.IdUser}
                    onChange={handleChanger}
                    placeholder="Type the IdUser"
                    className="inputTag"
                />

                <input
                    name="Email"
                    value={data.Email}
                    onChange={handleChanger}
                    placeholder="Type the email"
                    className="inputTag"
                />

                <button type="submit">
                    <img
                        src="/search/Search.png"
                        className="buttonSearch"
                    />
                </button>
            </form>
        </>
    )
}