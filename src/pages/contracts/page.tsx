import { useState } from "react";
import Layout from "../../components/generals/Layout";
import {makeSimulation } from "../../server/api";
import { useGlobalContext } from "../../server/context/GlobalContext";
import type { dataForSimulationContract, SimulationContract } from "../../types/BankBillet";
import GenerateCreditOptions from "./GenerateCreditOptions";
import ToMakeContract from "./makeContracts/ToMakeContract";

export default function PageGiveBillets(){

    const [actualPage, setActualPage] = useState<string>("Simulation");
    const [simulationData, setSimulationData] = useState<SimulationContract | null>(null);
    const [sucess, setSucess] = useState<boolean | null>(false);
    const [message, setMessage] = useState<string>("");

    const {token} = useGlobalContext();

    const Simulation = async (data : dataForSimulationContract) => { 
        if(token){
            const dataSimulation = await makeSimulation(data, token);

            setSimulationData(dataSimulation);
            setActualPage("Contract");
        }
    }

    return(
        <Layout>
            {actualPage === "Simulation" && (
                <GenerateCreditOptions
                    send={(data) => {
                        Simulation(data)
                    }}
                />
            )}

            {actualPage === "Contract" && (
                <ToMakeContract
                    token={token}
                    data={simulationData || null}
                    setActualPage={setActualPage}
                    setSucess={setSucess}
                    setMessage={setMessage}
                />
            )}
        </Layout>
    )
}