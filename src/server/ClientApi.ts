import type { SearchUser } from "../types/UserTypes";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export async function UserSearchFetch(data: SearchUser, token: string){
    return await fetch(`${BACKEND_URL}/users`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).then(async(resp) => {
        const response = resp.json();

        return response;
    })

}

export async function fetchPreLimits(id?: string, token?: string){

    return await fetch(`${BACKEND_URL}/users/limits/${id}`, {
        method: 'GET',
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }).then(async (result : any) => {
        return await result.json();

    }).catch(async (error: any) => {
        
        throw new Error(error?.message);
    })
}


export async function ClientDetails(idClint: string, token: string){
    return await fetch(`${BACKEND_URL}/users/${idClint}`, {
        method: "GET",
        headers: {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }).then(async(resp) => {
        const response = resp.json();

        return response;
    })

}