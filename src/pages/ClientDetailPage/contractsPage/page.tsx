import { useParams } from "react-router-dom";
import Layout from "../../../components/generals/Layout";
import { useEffect, useState } from "react";
import type { UserContractsDetails } from "../../../types/UserTypes";
import { useGlobalContext } from "../../../server/context/GlobalContext";
import { ClientDetails } from "../../../server/ClientApi";
import HeaderClientDetails from "./components/HeaderClientDetails";
import RenderContracts from "./components/RenderContracts";

export default function ClientDetailPage(){
    const [userD, setUserD] = useState<UserContractsDetails | null>(null);

    const {id} = useParams();
    const {loading, token} = useGlobalContext();

    const handleUserData = async () => {
        if(id && token){
            const data = await ClientDetails(id, token);
            setUserD(data);
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
                contracts={userD?.contracts || []}
            />
        </Layout>
    )
}