class BankAccount {
    constructor(private balance: number = 0) {}

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }

    displayBalance(): void {
        console.log(`Current Balance: $${this.balance}`);
    }
}

const account = new BankAccount(500);
account.deposit(200);
account.withdraw(150);
account.displayBalance();