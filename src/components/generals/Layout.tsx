import Header from "./Header";

type Layout = {
    children: React.ReactNode;
    
}

export default function Layout({children} : Layout){

    return(
        <div
            className="flex gap-5"
        >
            <Header/>
            {children}
        </div>
    )
}