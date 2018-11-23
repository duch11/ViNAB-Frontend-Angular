export class BudgetAccount {
    userName: string;
    budgetName: string;
    accountName: string;

    constructor (ynabUsername: string,
        budgetName: string,
        budgetAccountName: string) {
            this.userName = ynabUsername;
            this.budgetName = budgetName;
            this.accountName = budgetAccountName;
        }
}
