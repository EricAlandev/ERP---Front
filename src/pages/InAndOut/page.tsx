import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/InAndOut/LoginForm";
import { useGlobalContext } from "../../server/context/GlobalContext";
import { loginUser } from "../../server/InAndOutApi";
import type { UserType } from "../../types/UserTypes";
import Layout from "../../components/generals/Layout";

export default function Login(){

    const navigate = useNavigate();

    const {login} = useGlobalContext();

    return(
        <Layout>
            <LoginForm
                    send={async (data) => {
                        const loginResp : UserType = await loginUser(data);
                        login(loginResp);
                        navigate("/giveBankBillets")
                    }}
            />
        </Layout>
    )
}