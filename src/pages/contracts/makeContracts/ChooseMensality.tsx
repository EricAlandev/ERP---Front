import {useState, type Dispatch, type SetStateAction } from "react";
import { makeContract } from "../../../server/api";
import type { DataContract } from "../../../types/BankBillet";

type ChooseMensality = {
    idCliente?: number;
    nameCLient?: string;
    quantityInstallments?: number;
    totalPrice: number;
    token: string | undefined;

    setSucess: Dispatch<SetStateAction<boolean | null>>;
    setMessage: Dispatch<SetStateAction<string>>;
}

export default function ChooseMensality({idCliente,  nameCLient,quantityInstallments, totalPrice, token , setSucess, setMessage} : ChooseMensality){

    const [installment, setInstallment] = useState<number>(1);
    const mensality = [];

    if(quantityInstallments){
        for(let i = 0; i < quantityInstallments; i++){
            mensality.push(i + 1);
        }
    }

    const priceInstallment = totalPrice/installment;

    const handlePricer = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const {value} = e.target;
        setInstallment(Number(value));
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const contractData : DataContract = {
            idClient : idCliente,
            nameClient: nameCLient,
            priceInstallments: priceInstallment,
            QuantityInstallments: quantityInstallments,
            BankBilletType: ""
        }

        if(token){
            makeContract(contractData, token)
            .then((resp) => {
                setSucess(true);
                setMessage(resp);
            });
        }
    }
 
    return(
        <>
            <form
                id="Form"
                onSubmit={handleSubmit}
                className="flex flex-col"
            >
                <label htmlFor="istallmente">Quantity Installments</label>

                <select
                    id="istallmente"
                    name="installment"
                    value={installment}
                    onChange={handlePricer}
                >
                    {mensality.length > 0 && (
                        mensality.map((iNumber) => (
                            <option
                                value={iNumber}
                            >
                                {iNumber}x
                            </option>
                        ))
                    )}
                </select>

            </form>

            <p>
                {installment} installments of R$ {priceInstallment.toFixed(2)}
            </p>

            <button
                type="submit"
                form="Form"
                className="confirmButton"
            >
                    Make a Deal
            </button>
        </>
    )
}