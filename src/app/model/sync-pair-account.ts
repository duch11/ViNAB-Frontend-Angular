import { BankAccount } from "./bank-account";
import { YnabAccount } from "./ynab-account";
export class SyncPairAccount {
    lastsync: number;
    ynabAccount: YnabAccount;
    bankAccount: BankAccount;
}
