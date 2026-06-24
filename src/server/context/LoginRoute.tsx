import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext"


export default function LoginRoute(){

    const {token, loading} = useGlobalContext();
    const navigate = useNavigate();

    if(loading){
        return <p>Loading...</p>
    }

    if(token && !loading){
        navigate("/giveBankBillets");
    }

    return <Outlet/>
}