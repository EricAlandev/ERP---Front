import type { SearchUser } from "../../../types/UserTypes";

type UserSkeSearch = SearchUser & {
    click: () => void;
}


export default function UserSkeSearch({Email, click} : UserSkeSearch){

    return(
        <div
            onClick={click}
        >
            <h2>
                {Email}
            </h2>
        </div>
    )
}