type ContractBankBilletCombo = {
    id: number;
    name: string;
    date: string;
}

export default function ContractBankBilletCombo({id, name, date} : ContractBankBilletCombo){

    return(
        <div
            className="blockSmallProp"
        >
            <p className="contractValue">
                {id}
            </p>

            <p className="contractValue">
                {name}
            </p>

            <p className="contractValue">
                {date}
            </p>
        </div>
    )
}