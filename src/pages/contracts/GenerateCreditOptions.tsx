import React, { useState } from "react";
import type { MakeContract } from "../../types/BankBillet";


type GiveBoletos = { 
    send: (contract: MakeContract) => void;
}

export default function GenerateCreditOptions({ send }: GiveBoletos) {

    const [contrat, setContrat] = useState<MakeContract>({
        idClient: "", 
        bankBilletType: "", 
        price: "",
    });
    
    const handleChanger = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setContrat((c) => ({
            ...c, 
            [name]: value
        }));
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    send(contrat);
                }}
            >
                <label htmlFor="idClient">Id Client</label>
                <input
                    id="idClient"
                    name="idClient" 
                    value={contrat.idClient} 
                    onChange={handleChanger}
                    type="text"
                    required
                />

                <fieldset className="flex flex-col">
                    <div>
                        <label htmlFor="bankBilletType">Boleto types</label>
                        <select 
                            id="bankBilletType"
                            name="bankBilletType" 
                            value={contrat.bankBilletType} 
                            onChange={handleChanger}
                            required
                        >
                            <option value="" disabled>Select a type...</option>
                            <option value="LESS TAXES">Less Taxes</option>
                            <option value="MORE TAXES">More Taxes</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="price">Total Price</label>
                        <input
                            id="price"
                            name="price" 
                            value={contrat.price} 
                            onChange={handleChanger}
                            type="number"
                            step="0.01"
                            required
                        />
                    </div>
                </fieldset>

                <button className="confirmButton" type="submit">
                    Create
                </button>
            </form>
        </>
    );
}