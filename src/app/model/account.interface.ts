import { BankAccount } from "./bankAccount.interface";
import { BudgetAccount } from "./budgetAccount.interface";
export interface Account {
    _id?: string;
    lastsync: string;
    nickName: string;
    owner_id: string;
    budget: {
        userName: string;
        budgetName: string;
        accountName: string;
    }
    bank: {
        nickName: string;
        bankName: string;
        accountName: string;

    }


}
