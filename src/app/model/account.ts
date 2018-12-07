import { BankAccount } from "./bankAccount";
import { BudgetAccount } from "./budgetAccount";
export class Account {
    _id: string;
    lastsync: string;
    nickName: string;
    budget: BudgetAccount;
    bank: BankAccount;
    owner_id: string;

    constructor (budget: BudgetAccount, bank: BankAccount, owner_id: string, lastsync: string, nickname: string) {
        this.owner_id = owner_id;
        this.nickName = nickname;
        this.lastsync = lastsync;
        this.bank = bank;
        this.budget = budget;
    }
}
