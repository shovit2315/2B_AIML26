class BankAccount {

    static bankInfo() {
        console.log("Bank Name: hsd Bank");
        console.log("Branch: New York");
    }

    constructor(accountNo, name, balance) {
        this.accountNo = accountNo;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    display() {
        console.log("Account No:", this.accountNo);
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
    }
}

let a1 = new BankAccount(101, "shovit", 10000);
let a2 = new BankAccount(102, "utkarsh", 5000);

BankAccount.bankInfo();

a1.deposit(2000);
a1.withdraw(3000);
a1.display();

a2.deposit(1000);
a2.withdraw(7000);
a2.display();
