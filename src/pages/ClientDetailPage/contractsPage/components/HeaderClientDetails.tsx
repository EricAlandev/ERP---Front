import type { Integrity } from "../../../../types/UserTypes";

type HeaderClientDetails = {
    id : number;
    email? : string; 
    birthday? : string; 
    integritys : Integrity[]; 
}

export default function HeaderClientDetails({id, email, birthday, integritys}: HeaderClientDetails){

    return(
        <div>
            <h1 className="mt-5 text-center">
                Client Details:
            </h1>

            <div className="flex gap-5 mt-5">
                <h2>
                    Name: {email}
                </h2>

                <h2>
                    Birthday: {birthday}
                </h2>

                {integritys?.length > 0 && (
                    <div className="flex flex-col">
                        <h2>Integrity</h2>
                        {integritys.map((i) => (
                            <p>
                                {i.integrity}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}