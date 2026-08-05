type TittleBankBilletCombo = {
    type: string;
}

export default function TittleBankBilletCombo({type} : TittleBankBilletCombo){

    return(
        <>
            {/* Header */}
            <div className="blockBigProp">
                <p className="contractProp">
                    {type} Number
                </p>

                <p className="contractProp">
                    {type}
                </p>

                <p className="contractProp">
                    Date
                </p>
            </div>
        </>
    )
}