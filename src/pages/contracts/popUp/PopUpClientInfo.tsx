import type { Stats } from "../../../types/BankBillet"

type PopUpClientInfo = {
    name?: string;
    stats?: Stats[];
    closePopUp: any;
}

export default function PopUpClientInfo({name, stats, closePopUp} : PopUpClientInfo){

    let Stats: string = "";

    if(stats){
        for(let i = 0; i < stats?.length; i++){
            if(i + 1 == stats.length){
                Stats += stats[i];
            }

            else{
                Stats += stats[i] + ", ";
            }
        }
    }

    return(
        <>
            {/*Overlay */}
            <div onClick={closePopUp}  className="fixed inset-0 bg-black opacity-70"></div>

            {/*PopUp */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vh] bg-[white] rounded-md">

                {/*Header */}
                <div className="w-full flex justify-end">
                    <img
                        src="/generals/Back.png"
                        onClick={closePopUp}
                        className="mt-1.5 mr-1.5 cursor-pointer"
                    />
                </div>

                {/*Tittle */}
                <h2 className="text-center">Informations Client</h2>

                {/*body of the popUp*/}
                <div className="w-[40vw] mx-auto mt-2.5 text-[15px]">
                    <div className="flex gap-2">
                        <h3>Client Name:</h3>
                        <h3>{name}</h3>
                    </div>

                    <div className="flex gap-2">
                        <h3>Client Stats:</h3>
                        <h3>[{Stats}]</h3>
                    </div>
                </div>
            </div>
        </>
    )
}