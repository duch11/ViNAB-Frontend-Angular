import { SyncPairAccount } from "./sync-pair-account";
export class User {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;

    sync_pairs: SyncPairAccount[];
}
