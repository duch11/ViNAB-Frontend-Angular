import { User } from "./user";
import { BudgetAccount } from "./budgetAccount";
import { BankAccount } from "./bankAccount";
import { Account } from "./account";

const YNABACCOUNTS: BudgetAccount[] = [
    new BudgetAccount("my ynab username1", "Big budget1", "Mastercard1"),
    new BudgetAccount("my ynab username2", "Big budget2", "Mastercard2"),
    new BudgetAccount("my ynab username3", "Big budget3", "Mastercard3")
];

const BANKACCOUNTS: BankAccount[] = [
    new BankAccount("my bank account 1", "BMO 1", "Mastercard Black 1"),
    new BankAccount("my bank account 2", "BMO 2", "Mastercard Black 2"),
    new BankAccount("my bank account 3", "BMO 3", "Mastercard Black 3")
];

export let ACCOUNTS: Account[][] = [
    [new Account("1", YNABACCOUNTS[0], BANKACCOUNTS[0], "today 1", "My lovely budget 1")],
    [new Account("1", YNABACCOUNTS[1], BANKACCOUNTS[1], "today 2", "My lovely budget 2")],
    [new Account("1", YNABACCOUNTS[2], BANKACCOUNTS[2], "today 3", "My lovely budget 3")]];

export const TESTUSERS: User[] = [
    new User("1", "my@email.com", "me my", "123"),
    new User("2", "my@email.com", "me my", "123"),
    new User("3", "my@email.com", "me my", "123")
];
