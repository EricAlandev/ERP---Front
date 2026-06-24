type HeaderMakeContract = {
    setActualPage: any;
    name?: string;
    stats?: string;
    price?: number;
}

export default function HeaderMakeContract({setActualPage, name, stats, price} : HeaderMakeContract){

    return(
            <div>
                <h1 className="text-center">Simulation Values</h1>
                
                <div
                    className="flex items-center"
                >
                        <img
                    src="/generals/Back.png"
                    onClick={() => {
                        setActualPage("Simulation")
                    }}
                    className="backButton"
                    />

                    <div
                        className="flex flex-col"
                    >
                        <h2>{name} - {stats} Stats</h2>

                        <h3>Loan of {price}</h3>
                    </div>
                </div>
            </div>
    )
}