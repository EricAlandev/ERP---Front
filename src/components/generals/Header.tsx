import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../server/context/GlobalContext";

export default function Header(){

    const [open, setOpen] = useState<boolean>(false);

    const {token, loading, logout} = useGlobalContext();

    useEffect(() => {
        if(!loading) return;
    }, [loading]);

    if(loading) {
        return (
            <p>
                Loading, wait.
            </p>
        )
    }

    return(
        <>
            <div
                className={`${open === true ? "hidden" : "headerNotSelected"}`}
            >
                <img
                    onClick={() => {
                        setOpen(!open);
                    }}
                    src="/header/header.png"
                    className="max-h-[40px]"
                 />
            </div>

            {(open && open === true) && (
                <>        
                    <div className="header">
                        <div
                            className={`${open === true ? "" : "hidden"}`}
                        >
                            <img
                                onClick={() => {
                                    setOpen(!open);
                                }}
                                src="/header/header.png"
                                className="max-h-[40px]"
                            />
                        </div>
                        
                        <nav className="mt-3">
                            <ul
                                className="flex flex-col gap-2"
                            >
                                {!token && (
                                    <>
                                        <li>
                                            <Link
                                                to={"/login"}
                                            >
                                                Login
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to={"/register"}
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}

                                {token && (
                                    <>
                                    <li>
                                        <Link
                                            to={"/generateBoleto"}
                                        >
                                            Gerenate Bank Billets
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to={"/giveBankBillets"}
                                        >
                                            Give Bank Billets
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to={"/login"}
                                            onClick={logout}
                                        >
                                            Leave
                                        </Link>
                                    </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </>
    )
}