import MainRegisterForm from "./components/MainRegisterForm";
import { registerUser } from "../../server/InAndOutApi";
import Layout from "../../components/generals/Layout";
import { useState } from "react";
import { ADRESS_REGISTER, MAIN_REGISTER } from "./const/RegisterConst";
import AdressRegisterFrom from "./components/AdressRegisterFrom";
import type { UserType } from "../../types/UserTypes";


export default function RegisterPage(){

    const [page, setPage] = useState<String>("");
    const [data, setData] = useState<UserType | null>();

    const handleNextPage = (nextPage : string, data : UserType | null) => {
        if(nextPage && nextPage == page){
            return null;
        }

        if((nextPage) && nextPage === MAIN_REGISTER){
            setPage(nextPage);
            setData(null);
        }

        else if((nextPage) && nextPage === ADRESS_REGISTER){
            setPage(nextPage);
            setData(data)
        }
    }

    const handleSendForm = async (adressData: UserType) => {
        setData((e) => (
            {...e, data}
        ))
        await registerUser(adressData)
    }

    return(
        <Layout>
            {MAIN_REGISTER && (
                <MainRegisterForm
                    nextPage={handleNextPage}
                />
            )}
            
            {ADRESS_REGISTER && (
                <AdressRegisterFrom/>
            )}
        </Layout>
    )
}