import { useState } from "react";
import { generateSucessPDF } from "../../server/api";
import type { BankBillet } from "../../types/BankBillet";
import Header from "../../components/generals/Header";

export default function SucessPage(){

    const [userData, setUserData] = useState<BankBillet>({clientName: "", value: '', date: ""});

    const [openHeader, setOpenHeader] = useState<boolean>(false);

    const handleChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserData((e) => (
           { ...e, [name] : value}
        ))

        console.log(userData);
    }

    return(
        <div className="flex gap-5">
            <Header
                click={(open) => {
                    if(open === true){
                        setOpenHeader(true);
                    }

                    else{
                        setOpenHeader(false);
                    }
                }}
            />
            
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className={`flex flex-col mx-auto mt-10 gap-2 ${openHeader === true ? "max-w-[70vw]" : "max-w-[85vw]"} duration-300`}
            >
                <fieldset
                    className="flex items-center gap-5"
                >
                    <label className="label">Client Name</label>
                    <input
                        name="clientName"
                        value={userData.clientName}
                        placeholder="Client name"
                        onChange={handleChanger}
                    />
                </fieldset>

                <fieldset
                    className="flex items-center gap-5"
                >
                    <label className="label">Price</label>
                    <input
                        name="value"
                        value={userData.value}
                        placeholder="Price"
                        onChange={handleChanger}
                    />
                </fieldset>

                <fieldset
                    className="flex items-center gap-5"
                >
                    <label className="label">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={userData.date}
                        placeholder="Price"
                        onChange={handleChanger}
                    />
                </fieldset>

                <button
                    type="submit"
                    onClick={() => {
                        generateSucessPDF(userData);
                    }}
                    
                    className="confirmButton"
                >
                    Generate Pdf
                </button>
            </form>
        </div>
    )
}