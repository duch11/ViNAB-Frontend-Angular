import { User } from "./user";
import { YnabAccount } from "./ynab-account";
import { BankAccount } from "./bank-account";
import { SyncPairAccount } from "./sync-pair-account";

const YNABACCOUNTS: YnabAccount[] = [
    new YnabAccount("my ynab username1", "Big budget1", "Mastercard1"),
    new YnabAccount("my ynab username2", "Big budget2", "Mastercard2"),
    new YnabAccount("my ynab username3", "Big budget3", "Mastercard3")
];

const BANKACCOUNTS: BankAccount[] = [
    new BankAccount("my bank account 1", "BMO 1", "Mastercard Black 1"),
    new BankAccount("my bank account 2", "BMO 2", "Mastercard Black 2"),
    new BankAccount("my bank account 3", "BMO 3", "Mastercard Black 3")
];
const SYNCACCOUNTS: SyncPairAccount[] = [
    new SyncPairAccount(YNABACCOUNTS[1], BANKACCOUNTS[1], "today 1", "My lovely budget 1"),
    new SyncPairAccount(YNABACCOUNTS[2], BANKACCOUNTS[2], "today 2", "My lovely budget 2"),
    new SyncPairAccount(YNABACCOUNTS[3], BANKACCOUNTS[3], "today 3", "My lovely budget 3")
];
export const TESTUSERS: User[] = [
    {id: 1, email: "my@email.com", name: "me my", password: "123", sync_pairs: [SYNCACCOUNTS[1]]},
    {id: 2, email: "his@email.com", name: "his johnson", password: "123", sync_pairs: [SYNCACCOUNTS[2]]},
    {id: 3, email: "her@email.com", name: "her fluffy", password: "123", sync_pairs: [SYNCACCOUNTS[3]]}
];
