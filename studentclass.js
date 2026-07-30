"use strict";
class UniversityStudent {
    studentId;
    name;
    constructor(id, name) {
        this.studentId = id;
        this.name = name;
    }
}
const uStudent = new UniversityStudent("UID-987", "Charlie");
console.log(uStudent.studentId);
