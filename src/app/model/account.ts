import { BankAccount } from "./bankAccount";
import { BudgetAccount } from "./budgetAccount";
export class Account {
    private id: string;
    lastsync: string;
    nickName: string;
    budget: BudgetAccount;
    bank: BankAccount;

    constructor (id: string, budget: BudgetAccount, bank: BankAccount, lastsync: string, nickname: string) {
        this.id = id;
        this.nickName = nickname;
        this.lastsync = lastsync;
        this.bank = bank;
        this.budget = budget;
    }

    /**
     * getID
 : string    */
    public getId(): string {
        return this.id;
    }
}
