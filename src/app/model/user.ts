import { SyncPairAccount } from "./sync-pair-account";
export class User {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;

    sync_pairs: SyncPairAccount[];
    constructor() {

        this.id = 0;
        this.email = "";
        this.firstname = "";
        this.lastname = "";
        this.password = "";
        this.sync_pairs = [];
    }

    toString(): string {
        return this.id + this.email + this.firstname + this.lastname + this.password + this.sync_pairs;
    }
}
