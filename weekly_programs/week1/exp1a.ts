let user: string = "Supriya";
let credits: number = 4;
let isAvailable: boolean = true;

console.log("Datatype of user-->" + typeof user);
console.log("Datatype of credits-->" + typeof credits);
console.log("Datatype of isAvailable-->" + typeof isAvailable);

function showCourseInfo(user: string, creditValue: number, available: boolean): void {
    console.log(`Course user:${user}`);
    console.log(`Credits:${creditValue}`);
    console.log(`Availability:${available ? "Open for Enrollment" : "Closed"}`);
}

showCourseInfo(user, credits, isAvailable);