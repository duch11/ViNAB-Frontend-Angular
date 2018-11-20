import { SyncPairAccount } from "./sync-pair-account";
import { YnabAccount } from "./ynab-account";
import { BankAccount } from "./bank-account";
export class User {
    id: number;
    email: string;
    name: string;
    password: string;

    sync_pairs: SyncPairAccount[];
    constructor() {


        this.id = 0;
        this.email = "";
        this.name = "";
        this.password = "";
        this.sync_pairs = [];
    }

    toString(): string {
        return this.id + this.email + this.name + this.password + this.sync_pairs;
    }
}
