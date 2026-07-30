"use strict";
class StudentProfile {
    name;
    rollNo;
    course;
    constructor(name, rollNo, course) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }
    displayDetails() {
        console.log(`Name: ${this.name}, Roll No: ${this.rollNo}, Course: ${this.course}`);
    }
}
new StudentProfile("Alice", 101, "Computer Science").displayDetails();
