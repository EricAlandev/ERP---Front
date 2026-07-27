import { useNavigate } from "react-router-dom";

type Logged = {
    token?: string | null;
    children: React.ReactNode;
}

export default function Logged({token, children} : Logged){

    const navigate = useNavigate();

    if(!token){
        navigate("/login");
    }

    return <>{children}</>
}