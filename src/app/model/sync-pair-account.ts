import { BankAccount } from "./bank-account";
import { YnabAccount } from "./ynab-account";
export class SyncPairAccount {
    lastsync: string;
    ynabAccount: YnabAccount;
    bankAccount: BankAccount;

    constructor (ynabAccount: YnabAccount, bankAccount: BankAccount, lastsync: string) {
        this.lastsync = lastsync;
        this.bankAccount = bankAccount;
        this.ynabAccount = ynabAccount;
    }
}
