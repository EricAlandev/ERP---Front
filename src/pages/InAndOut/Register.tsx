import Header from "../../components/generals/Header";
import RegisterForm from "../../components/InAndOut/RegisterForm";
import { registerUser } from "../../server/InAndOutApi";

export default function RegisterPage(){

    return(
        <div
            className="flex gap-4"
        >
            <Header/>

            <RegisterForm
                send={async (data) => {
                    await registerUser(data)
                }}
            />
        </div>
    )
}