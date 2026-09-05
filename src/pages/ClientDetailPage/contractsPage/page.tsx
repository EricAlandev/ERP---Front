import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../components/generals/Layout";
import { useEffect, useState } from "react";
import type { UserContractsDetails } from "../../../types/UserTypes";
import { useGlobalContext } from "../../../server/context/GlobalContext";
import { ClientDetails } from "../../../server/ClientApi";
import HeaderClientDetails from "./components/HeaderClientDetails";
import RenderContracts from "./components/RenderContracts";
import { pdfContract } from "../../../server/api";

export default function ClientDetailPage(){
    const [userD, setUserD] = useState<UserContractsDetails | null>(null);

    const {id} = useParams();
    const navigate = useNavigate();

    const {loading, token} = useGlobalContext();
    

    const handleUserData = async () => {
        if(id && token){
            const data = await ClientDetails(id, token);
            setUserD(data);
        }
    }

    const handleGeneratePdf = async (id: number) => {
        if(token){
            await pdfContract(id, token);
        }
    }
    
    useEffect(() => {
        handleUserData();
    }, [id, token]);

    if(loading){
        return (
            <>
                <p>
                    Loading
                </p>
            </>
        )
    }

    return(
        <Layout>
            <HeaderClientDetails
                id={userD?.id || 0}
                email={userD?.email}
                birthday={userD?.birthday}
                integritys={userD?.integritys || []}
            />
                    
            <RenderContracts
                idUser={id}
                contracts={userD?.contracts || []}
                handleGeneratePdf={handleGeneratePdf}
                navigate={navigate}
            />
        </Layout>
    )
}