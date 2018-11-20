export class YnabAccount {
    ynabUsername: string;
    budgetName: string;
    budgetAccountName: string;

    constructor (ynabUsername: string,
        budgetName: string,
        budgetAccountName: string) {
            this.ynabUsername = ynabUsername;
            this.budgetName = budgetName;
            this.budgetAccountName = budgetAccountName;
        }
}
