import { useState } from "react"
import SearchPage from "./components/SearchUsers";
import { SearchUserValue } from "./constants/PageBankBilletsValue";
import Layout from "../../components/generals/Layout";
import type { SearchUser } from "../../types/UserTypes";
import { UserSearchFetch } from "../../server/ClientApi";
import { useGlobalContext } from "../../server/context/GlobalContext";
import RenderUsers from "./components/RenderUsers";

export default function BankBilletPage(){

    const [actualPage, setActualPage] = useState<string>(SearchUserValue);
    const [clients, setClients] = useState<SearchUser[]>([]);

    const {token} = useGlobalContext();

    const SearchUsers = async (data: SearchUser) => {
        if(!token){
            return;
        }

        const clientsSearch : SearchUser[] = await UserSearchFetch(data, token);
        setClients(clientsSearch);  
    }

    return(
        <Layout>
            {actualPage === SearchUserValue && (
                <div className="flex flex-col">
                    <SearchPage
                        send={(seach) => {SearchUsers(seach)}}
                    />

                    <RenderUsers
                        users={clients}
                    />
                </div>
            )}
        </Layout>
    )
}