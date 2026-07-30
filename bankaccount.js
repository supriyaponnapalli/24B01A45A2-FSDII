"use strict";
class BankAccount {
    balance;
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }
    displayBalance() {
        console.log(`Current Balance: $${this.balance}`);
    }
}
const account = new BankAccount(500);
account.deposit(200);
account.withdraw(150);
account.displayBalance();
