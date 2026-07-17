import { useState } from "react";
import type { Stats } from "../../../types/BankBillet";
import PopUpClientInfo from "../popUp/PopUpClientInfo";

type HeaderMakeContract = {
    setActualPage: any;
    name?: string;
    stats?: Stats[];
    price?: number;
}

export default function HeaderMakeContract({setActualPage, name, stats, price} : HeaderMakeContract){

    const [openPopUp, setOpenPopUp] = useState<boolean>(false);

    const handlePopUp = () => {
        setOpenPopUp(!openPopUp);
    }

    return(
            <div>
                <div className="flex items-center gap-2">
                    <h1 className="text-center">
                        Simulation Values
                    </h1>

                    <button
                        onClick={handlePopUp}
                        className="cursor-pointer"
                    >
                        CLient Informations
                    </button>
                </div>
                
                <div
                    className="flex items-center"
                >
                    <img
                    src="/generals/Back.png"
                    onClick={() => {
                        setActualPage("Simulation")
                    }}
                    className="backButton cursor-pointer"
                    />

                    <div
                        className="flex flex-col"
                    >
                        <h2>{name}</h2>

                        <h3>Loan of {price}</h3>
                    </div>
                </div>

                {openPopUp && (
                    <PopUpClientInfo 
                        name={name} 
                        stats={stats} 
                        closePopUp={handlePopUp}
                    />
                )}
            </div>
    )
}