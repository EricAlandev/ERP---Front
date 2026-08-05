import { useNavigate } from "react-router-dom"
import type { SearchUser } from "../../../types/UserTypes"
import UserSkeSearch from "../ske/UserSkeSearch"

type RenderUsers = {
    users: SearchUser[]
}

export default function RenderUsers({users} : RenderUsers){

    const navigate = useNavigate();

    const EnterUsePage = (id: string | undefined) => {
        if(id){
            navigate(`/client/${id}`);
        }
    }

    return(
        <>
            {users?.length > 0 ? (
                users.map((u) => (
                    <UserSkeSearch  
                        key={u.IdUser}
                        IdUser={u.IdUser}
                        Email={u?.Email}
                        click={() => EnterUsePage(u?.IdUser)}
                    />
                ))
            ) : (
                <p>
                    Any result to your research
                </p>
            )}
        </>
    )
}