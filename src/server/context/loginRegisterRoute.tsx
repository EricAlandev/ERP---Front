import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";
import { useEffect } from "react";


export default function LoginRegisterRoute(){

    const {token, loading} = useGlobalContext();

    const navigate = useNavigate();

    useEffect(() => {
        if(loading) return;
    }, [token, loading])

    if(token && !loading){
        navigate("/giveBankBillets")
    }

    return <Outlet/>
}