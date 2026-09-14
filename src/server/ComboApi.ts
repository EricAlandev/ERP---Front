
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export async function getStatesCombos(){
        return await fetch(`${BACKEND_URL}/combo/states`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(async resp => {
            
            const response : any = await resp.json();

            return response;
        })
        .catch(
            e => console.log(e)
        );
}