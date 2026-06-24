import type { UserType } from "../types/UserTypes";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export async function registerUser(userData: UserType){

        return await fetch(`${BACKEND_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(async resp => {

            if(!resp.ok){
                throw new Error("fail in the response");
            }
            
            const response = resp.json();

            return response;
        })
        .catch(
            e => console.log(e)
        );
}

export async function loginUser(userData: UserType){

        return await fetch(`${BACKEND_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(async resp => {

            if(!resp.ok){
                throw new Error("fail in the response");
            }
            
            const response = resp.json();

            return response;
        })
        .catch(
            e => console.log(e)
        );
}