import { useState } from "react";
import Layout from "../../components/generals/Layout";
import {makeSimulation } from "../../server/api";
import { useGlobalContext } from "../../server/context/GlobalContext";
import type { dataSimulationContract, preLimits } from "../../types/BankBillet";
import GenerateCreditOptions from "./GenerateCreditOptions";
import {SimulationValue } from "./constants/PageValues";
import { fetchPreLimits } from "../../server/ClientApi";

export default function PageGiveBillets(){

    const [actualPage, setActualPage] = useState<string>(SimulationValue);
    const [preData, setPreData] = useState<preLimits | null>(null);;
    const [sucess, setSucess] = useState<boolean | null>(false);
    const [message, setMessage] = useState<string>("");

    const {token} = useGlobalContext();

    const fetchPreData = async (data : dataSimulationContract) => { 
        if(token){
            const preLimits : preLimits | null  = await fetchPreLimits(data?.idClient, token);

            setPreData(preLimits);
            
        }
    }

    return(
        <Layout>
            {actualPage === SimulationValue && (
                <GenerateCreditOptions
                    send={fetchPreData}
                    preData={preData}
                />
            )}
        </Layout>
    )
}