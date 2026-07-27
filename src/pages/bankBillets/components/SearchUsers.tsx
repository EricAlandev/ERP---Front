import React, { useState } from "react"
import type { SearchUser } from "../../../types/UserTypes";
import { LT, MT } from "../constants/PageBankBilletsValue";

type SearchPage = {
    send: (data: SearchUser) => void;
}

export default function SearchPage({send} : SearchPage){

    const [data, setData] = useState<SearchUser>({email: "", idUser : "", contractType: ""});


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
                    name="idUser"
                    value={data.idUser}
                    onChange={handleChanger}
                    placeholder="Type the IdUser"
                    className="inputTag"
                />

                <input
                    name="email"
                    value={data.email}
                    onChange={handleChanger}
                    placeholder="Type the email"
                    className="inputTag"
                />

                <select 
                    name="contractType" 
                    value={data.contractType} 
                    onChange={handleChanger} 
                    className="inputTag"
                >
                    <option value="">
                        Select
                    </option>

                    <option value={`${LT}`}>
                        LESS TAXES
                    </option>

                    <option value={`${MT}`}>
                        MORE TAXES
                    </option>
                </select>

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