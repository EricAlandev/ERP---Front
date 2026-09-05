import type {DataContract, dataForSimulationContract, Installment } from "../types/BankBillet";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

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
            
            const response : any = await resp.json();

            console.log("response makeContract: ", response.idContract, response);

            return response.idContract;
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


export async function pdfContract(id: number, token: string){

    return await fetch(`${BACKEND_URL}/contract/${id}/pdf`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
    }).then(async (resp) => {
        const blob: Blob = await resp.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        window.open(
            blobUrl, 
            '_blank',
            'width=400,height=400,status=no,toolbar=no,menubar=no,location=no'
        );
    });
}


export async function callInstallments(idContract: string , token: string){
    
    return await fetch(`${BACKEND_URL}/contract/installments/${idContract}`, {
        method: 'GET',
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }).then(async (r) => {
        const response : Installment[] = await r.json();

        console.log("result installments", response)

        return response;
    })
}