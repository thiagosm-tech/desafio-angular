export interface User {
    cpf: string;
    name: String;
    status: String;
    account: Array<Account>
}

export interface Account {
    accountNumber: String;
}