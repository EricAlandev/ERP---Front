import { useState } from "react";
import Layout from "../../components/generals/Layout";
import {makeSimulation } from "../../server/api";
import { useGlobalContext } from "../../server/context/GlobalContext";
import type { dataSimulationContract } from "../../types/BankBillet";
import GenerateCreditOptions from "./GenerateCreditOptions";
import {SimulationValue } from "./constants/PageValues";

export default function PageGiveBillets(){

    const [actualPage, setActualPage] = useState<string>(SimulationValue);
    const [simulationData, setSimulationData] = useState<dataSimulationContract | null>(null);
    const [sucess, setSucess] = useState<boolean | null>(false);
    const [message, setMessage] = useState<string>("");

    const {token} = useGlobalContext();

    const fetchPreData = async (data : dataSimulationContract) => { 
        if(token){
            const dataSimulation : dataSimulationContract | null  = await makeSimulation(data, token);

            console.log('Before the if', dataSimulation)
            if(dataSimulation !== null){
                setSimulationData((d) => ({
                    ...d, data
                }));
            }
        }
    }

    return(
        <Layout>
            {actualPage === SimulationValue && (
                <GenerateCreditOptions
                    send={fetchPreData}
                    simulationData={simulationData}
                />
            )}
        </Layout>
    )
}