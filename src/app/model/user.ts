import { Account } from "./account";
import { BudgetAccount } from "./budgetAccount";
import { BankAccount } from "./bankAccount";
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
