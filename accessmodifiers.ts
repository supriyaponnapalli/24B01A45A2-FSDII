class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    public getDepartment(): string {
        return this.department;
    }
}

const manager = new Manager("Bob", 85000, "IT");
console.log(manager.name);
console.log(manager.getSalary());
console.log(manager.getDepartment());