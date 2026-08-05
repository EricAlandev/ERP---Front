import type { SearchUser } from "../../../types/UserTypes";

type UserSkeSearch = SearchUser & {
    click: () => void;
}


export default function UserSkeSearch({Email, click} : UserSkeSearch){

    return(
        <div
            onClick={click}
            className=" mt-3 p-2 border-[#A0A0A0] border-[2px] cursor-pointer rounded-md"
        >
            <h2 className="font-[900]">
                {Email}
            </h2>
        </div>
    )
}