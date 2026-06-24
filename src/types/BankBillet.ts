export type BankBillet = {
    clientName: string,
    value: string,
    date: string
}

export type dataForSimulationContract = {
    idClient: string;
    bankBilletType: string;
    price: string;
}

export type SimulationContract = {
    QuantityInstallments: number;
    idClient: number;
    nameClient: string;
    statsClient: string;
    taxes: number;
    price: number;
}

export type DataContract = {
    idClient?: number;
    priceInstallments: number;
    QuantityInstallments?: number;
    nameClient?: string;
    BankBilletType?: string;
}