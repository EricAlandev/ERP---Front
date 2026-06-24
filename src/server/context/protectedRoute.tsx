import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";
import { useEffect } from "react";

export default function ProtectedRoute(){
    
    const {token, loading} = useGlobalContext();

    useEffect(() => {
        if(loading) return;
    }, [loading])
    
    if(!token && !loading){
        return <Navigate to="/login"/>
    }

    return <Outlet/>
}