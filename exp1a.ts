let courseTitle: string = "Advanced TypeScript";
let credits: number = 4;
let isAvailable: boolean = true;

console.log("Datatype of courseTitle-->" + typeof courseTitle);
console.log("Datatype of credits-->" + typeof credits);
console.log("Datatype of isAvailable-->" + typeof isAvailable);

function showCourseInfo(title: string, creditValue: number, available: boolean): void {
    console.log(`Course Title:${title}`);
    console.log(`Credits:${creditValue}`);
    console.log(`Availability:${available ? "Open for Enrollment" : "Closed"}`);
}

showCourseInfo(courseTitle, credits, isAvailable);