import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { useGlobalContext } from "../../server/context/GlobalContext";
import { loginUser } from "../../server/InAndOutApi";
import type { UserType } from "../../types/UserTypes";
import Layout from "../../components/generals/Layout";
import { useState } from "react";
import { LoginValidator } from "./validators/LoginValidator";
import ErrorPopUp from "../../components/popUp/errorPopUp";

export default function Login(){

    const [error, setError] = useState<boolean >(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const {login} = useGlobalContext();

    const handleSubmit = async (data : UserType) => {
            const validate : boolean = await blankValidade(data);

            if(!validate){
                const loginResp : UserType = await loginUser(data);
                login(loginResp);
                navigate("/makeContracts")
            }
    }

    const blankValidade = async(data : UserType) => {
        try {
            await LoginValidator(data);
            return false;
        } catch (error : any) {
            setError(true);
            setErrorMessage(error?.message);
            return true;
        }
    }

    return(
        <Layout>
            <LoginForm
                    send={handleSubmit}
            />

            <ErrorPopUp
                error={error}
                errorMessage={errorMessage}
                setError={setError}
                setErrorMessage={setErrorMessage}
            />
        </Layout>
    )
}