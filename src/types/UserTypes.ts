

export type UserType = {
    email ?: string;
    password ?: string;
    birthday ?: string;
    token?: string;
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

export type Contract = {
    idContract?: number;
    typeContract: string;
    date?: string;
}