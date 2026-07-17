import type { BankBillet, DataContract, dataForSimulationContract } from "../types/BankBillet";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export async function generateSucessPDF(bankBillet: BankBillet){

        return await fetch(`${BACKEND_URL}/boleto`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(bankBillet)
        })
        .then(async resp => {
            const blob = await resp.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            window.open(
                blobUrl, 
                "BoletoPopup", 
                "width=600,height=800,status=no,toolbar=no,menubar=no,location=no"
            );
        })
        .catch(
            e => console.log(e)
        );
}

export async function makeContract(contract: DataContract, token: string){
        console.log("Data contract", contract);
        return await fetch(`${BACKEND_URL}/contract/deal`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify(contract)
        })
        .then(async resp => {
            const response = await resp.json();

            return {message: "The installments was done!", data : response};
        })
        .catch(
            e => console.log(e)
        );
}

export async function makeSimulation(contract: dataForSimulationContract, token: string){
        return await fetch(`${BACKEND_URL}/contract/simulation/${contract?.idClient}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify(contract)
        })
        .then(async resp => {
            const response = await resp.json();

            console.log(response);

            return response;
        })
        .catch(
        );
}
