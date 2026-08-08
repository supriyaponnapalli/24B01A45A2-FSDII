class UniversityStudent {
    readonly studentId: string;
    public name: string;

    constructor(id: string, name: string) {
        this.studentId = id;
        this.name = name;
    }
}

const uStudent = new UniversityStudent("UID-987", "Charlie");
console.log(uStudent.studentId);