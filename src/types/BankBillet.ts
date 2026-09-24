export type BankBillet = {
    clientName: string,
    value: string,
    date: string
}

export type dataSimulationContract = {
    idClient?: string;
    bankBilletType?: string;
    price?: string;
    QuantityInstallments?: string;
    nameClient?: string;
    statsClient?: Stats[];
    taxes?: number;
}

export type Stats = {
    statsClient: string
}

export type DataContract = {
    idClient?: number;
    priceInstallments: number;
    QuantityInstallments?: number;
    nameClient?: string;
    BankBilletType?: string;
}

export type Installment = {
    id: number;
    price: number;
    stats: string;
    typecontract: string;
    expirationdate: string;
}