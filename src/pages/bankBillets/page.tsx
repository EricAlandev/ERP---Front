import { useState } from "react"
import SearchPage from "./components/SearchUsers";
import { SearchUserValue } from "./constants/PageBankBilletsValue";
import Layout from "../../components/generals/Layout";
import type { SearchUser } from "../../types/UserTypes";
import { UserSearchFetch } from "../../server/ClientApi";
import { useGlobalContext } from "../../server/context/GlobalContext";


export default function BankBilletPage(){

    const [actualPage, setActualPage] = useState<string>(SearchUserValue);
    const [clients, setCLients] = useState<SearchUser[]>([]);

    const {token} = useGlobalContext();

    const SearchUsers = async (data: SearchUser) => {
        if(!token){
            return;
        }

        const clientsSearch : SearchUser[] = await UserSearchFetch(data, token);
        
        if(clientsSearch.length > 0){
            setCLients(clientsSearch);
        }
    }

    return(
        <Layout>
            {actualPage === SearchUserValue && (
                <SearchPage
                    send={SearchUsers}
                />
            )}
        </Layout>
    )
}