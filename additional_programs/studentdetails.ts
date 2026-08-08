class StudentProfile {
    constructor(public name: string, public rollNo: number, public course: string) {}

    displayDetails(): void {
        console.log(`Name: ${this.name}, Roll No: ${this.rollNo}, Course: ${this.course}`);
    }
}

new StudentProfile("Alice", 101, "Computer Science").displayDetails();