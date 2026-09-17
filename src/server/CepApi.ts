

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


export const findCEP = async (cep: string) => {

    return await fetch(`${BACKEND_URL}/cep/${cep}`, {
        method: 'GET', 
        headers: {
            'Content-type' : 'application/json'
        }
    }).then(async (r) => {

        const response : any = await r.json();

        if(!r.ok){
            throw response;
        }

        return response;
    })
    .catch((e) => {
        throw e;
    })
}