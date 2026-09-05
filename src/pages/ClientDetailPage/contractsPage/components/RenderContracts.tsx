import type { Contract } from "../../../../types/UserTypes"
import ContractBankBilletCombo from "../../ske/ContractBankBilletCombo"
import TittleCombo from "../../ske/TittleCombo"

type RenderContracts = {
    idUser?: string;
    contracts: Contract[];
    handleGeneratePdf: (id: number) => void;
    navigate: any;
}

export default function RenderContracts({idUser, contracts, handleGeneratePdf, navigate} : RenderContracts){

    const activatePDF = (id: number) => {
        handleGeneratePdf(id);
    }

    const enterContract = (id: number) => {
        navigate(`/client/:${idUser}/contract/${id}`);
    }

    return(
        <>
            <TittleCombo
                text1={`Contract Number`}
                text2={"Contract"}
                text3={"Date"}
                text4={"Imp. contrato"}
            />

            {contracts.length > 0 && (
                contracts.map((c) => (
                    <ContractBankBilletCombo
                        id={c?.idContract || 0}
                        name={c?.typeContract}
                        date={c?.date || ""}
                        generateContract={(id) => {
                            activatePDF(id)
                        }}
                        enterContract={(id) => {
                            enterContract(id);
                        }}
                    />
                ))
            )}
        </>
    )
}