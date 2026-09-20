
//USER TYPE AND RELATIONEDS TO THE USER

export type UserType = Adress & {
    email ?: string;
    password ?: string;
    birthday ?: string;
    gender?: string;
    token?: string;
    typeUser?: string;
    cic?: string;
}

export type SearchUser = {
    Email ?: string;
    IdUser ? : string;
}

export type UserContractsDetails = {
    id: number;
    email?: string;
    birthday?: string;
    integritys: Integrity[];
    contracts: Contract[];
}


export type Integrity = {
    integrity: string;
}

export type Adress = {
    cep?: string;
    state?: string;
    neighborhood?: string;
    adress?: string;
    adressNumber?: string;
}

export type Contract = {
    idContract?: number;
    typeContract: string;
    date?: string;
}