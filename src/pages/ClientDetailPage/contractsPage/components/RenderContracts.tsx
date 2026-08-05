import type { Contract } from "../../../../types/UserTypes"
import ContractBankBilletCombo from "../../ske/ContractBankBilletCombo"
import TittleBankBilletCombo from "../../ske/TittleBankBilletCombo"

type RenderContracts = {
    contracts: Contract[]
}

export default function RenderContracts({contracts} : RenderContracts){

    return(
        <>
            <TittleBankBilletCombo
                type={"Contract"}
            />

            {contracts.length > 0 && (
                contracts.map((c) => (
                    <ContractBankBilletCombo
                        id={c?.idContract || 0}
                        name={c?.typeContract}
                        date={c?.date || ""}
                    />
                ))
            )}
        </>
    )
}