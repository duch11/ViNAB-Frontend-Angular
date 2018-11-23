import { Account } from "./account";
import { BudgetAccount } from "./budgetAccount";
import { BankAccount } from "./bankAccount";
export class User {
    private id: string;
    email: string;
    name: string;
    password: string;

    constructor(id: string, email: string, name: string, password: string) {
        this.id = id;
        this.email = "";
        this.name = "";
        this.password = "";
    }

    getID(): string {
        return this.id;
    }

    toString(): string {
        return this.id + this.email + this.name + this.password;
    }
}
