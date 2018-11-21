import { BankAccount } from "./bank-account";
import { YnabAccount } from "./ynab-account";
export class SyncPairAccount {
    private id: string;
    lastsync: string;
    nickname: string;
    ynabAccount: YnabAccount;
    bankAccount: BankAccount;

    constructor (id: string, ynabAccount: YnabAccount, bankAccount: BankAccount, lastsync: string, nickname: string) {
        this.id = id;
        this.nickname = nickname;
        this.lastsync = lastsync;
        this.bankAccount = bankAccount;
        this.ynabAccount = ynabAccount;
    }

    /**
     * getID
 : string    */
    public getId(): string {
        return this.id;
    }
}
