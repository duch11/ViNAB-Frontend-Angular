import { Account } from "./account.interface";
import { BudgetAccount } from "./budgetAccount.interface";
import { BankAccount } from "./bankAccount.interface";
export class User {
    _id: string;
    email: string;
    name: string;
    password: string;

    constructor(_id: string = "", email: string = "", name: string = "", password?: string) {
        this._id = _id;
        this.email = email;
        this.name = name;
        this.password = password;
    }

    toString(): string {
        return this._id + this.email + this.name + this.password;
    }
}
