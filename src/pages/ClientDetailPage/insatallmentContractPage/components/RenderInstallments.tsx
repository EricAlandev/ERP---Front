import type { Installment } from "../../../../types/BankBillet"
import TittleCombo from "../../ske/TittleCombo";
import InstallmentComponent from "../ske/InstallmentComponent";


type RenderInstallments = {
    installments: Installment[];
}

export default function RenderInstallments({installments} : RenderInstallments){

    return(
        <>
            <TittleCombo
                text1="Id User"
                text2="Price"
                text3="Stats"
                text4="Type Contract"
                text5="Expiration Date"
            />

            {installments.map((i, index) => (
                <InstallmentComponent
                    id={i?.id}
                    price={i?.price}
                    stats={i?.stats}
                    typecontract={i?.typecontract}
                    expirationdate={i?.expirationdate}
                />
            ))}
        </>
    )
}