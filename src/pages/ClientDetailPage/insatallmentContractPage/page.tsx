import { useParams } from "react-router-dom";
import Layout from "../../../components/generals/Layout";
import RenderInstallments from "./components/RenderInstallments";
import { useGlobalContext } from "../../../server/context/GlobalContext";
import { callInstallments } from "../../../server/api";
import type { Installment } from "../../../types/BankBillet";
import { useEffect, useState } from "react";


export default function InstallmentsContractPage(){

    const [installments, setInstallments] = useState<Installment[]>([]);

    const {idContract} = useParams();

    const {token} = useGlobalContext();

    const getInstallments = async () => {
        if(idContract && token){
            const installment : Installment[] = await callInstallments(idContract, token);
            
            setInstallments(installment);
        }
    }

    useEffect(() => {
        getInstallments();
    }, []);
    
    return(
        <Layout>
            <RenderInstallments
                installments={installments}
            />
        </Layout>
    )
}