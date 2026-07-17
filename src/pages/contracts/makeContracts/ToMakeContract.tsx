import type { Dispatch, SetStateAction } from "react";
import type { SimulationContract } from "../../../types/BankBillet";
import ChooseMensality from "./ChooseMensality";
import HeaderMakeContract from "./HeaderMakeContract";

type MakeContract = {
    data: SimulationContract | null;
    setActualPage: any;
    token: string | null;
    
    setSucess: Dispatch<SetStateAction<boolean | null>>;
    setMessage: Dispatch<SetStateAction<string>>;
}

export default function ToMakeContract({data, setActualPage, token , setSucess, setMessage} : MakeContract){

    let totalPriceWithTaxes;

    if(data){
        totalPriceWithTaxes = data?.price + (data?.price * (data?.taxes/100))
    }

    return (
        <div
            className="flex flex-col"
        >
            <HeaderMakeContract
                setActualPage={setActualPage}
                name={data?.nameClient}
                stats={data?.statsClient}
                price={data?.price}
            />
            
            <ChooseMensality
                idCliente={data?.idClient}
                nameCLient={data?.nameClient}
                quantityInstallments={data?.QuantityInstallments || 0}
                totalPrice={totalPriceWithTaxes || 0}
                token={token || undefined}
                setActualPage={setActualPage}
                bankBilletType={data?.BankBilletType}

                setSucess={setSucess}
                setMessage={setMessage}
            />
        </div>
    );
}