import Header from "./Header";

type Layout = {
    children: React.ReactNode;
}

export default function Layout({children} : Layout){

    return(
        <div
            className="flex"
        >
            <Header/>
            {children}
        </div>
    )
}