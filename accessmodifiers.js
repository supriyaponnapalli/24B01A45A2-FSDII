"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Employee {
    getDepartment() {
        return this.department;
    }
}
const manager = new Manager("Bob", 85000, "IT");
console.log(manager.name);
console.log(manager.getSalary());
console.log(manager.getDepartment());
