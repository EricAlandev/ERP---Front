import { useState } from "react"
import SearchPage from "./components/SearchUsers";
import { SearchUserValue } from "./constants/PageBankBilletsValue";
import Layout from "../../components/generals/Layout";
import type { SearchUser } from "../../types/UserTypes";
import { UserSearchFetch } from "../../server/ClientApi";
import { useGlobalContext } from "../../server/context/GlobalContext";
import RenderUsers from "./components/RenderUsers";
import { Box } from "@mui/material";

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
                <Box
                    sx={{
                        display : 'flex',
                        flexDirection: 'column'
                    }}
                 >
                    <SearchPage
                        send={(seach) => {SearchUsers(seach)}}
                    />

                    <RenderUsers
                        users={clients}
                    />
                </Box>
            )}
        </Layout>
    )
}