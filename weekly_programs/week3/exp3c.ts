class FreelanceProject {
    public projectType: string;
    public clientName: string;
    public hourlyRate: number;
    public hoursWorked: number;

    constructor(projectType: string, clientName: string, hourlyRate: number = 50, hoursWorked: number = 1) {
        this.projectType = projectType;
        this.clientName = clientName;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    public calculateTotalPayout(): number {
        return this.hourlyRate * this.hoursWorked;
    }

    public printProjectDetails(): void {
        console.log("=== Freelance Project Details ===");
        console.log(`Project Type : ${this.projectType}`);
        console.log(`Client Name  : ${this.clientName}`);
        console.log(`Hourly Rate  : $${this.hourlyRate}`);
        console.log(`Hours Worked : ${this.hoursWorked}`);
        console.log(`Total Payout : $${this.calculateTotalPayout()}`);
        console.log("=================================\n");
    }
}

const project1 = new FreelanceProject("Website Redesign", "Acme Corp");
const project2 = new FreelanceProject("Mobile App", "TechNova", 85, 20);

project1.printProjectDetails();
project2.printProjectDetails();

project2.hoursWorked = 45;

console.log(`Updated Payout for ${project2.projectType}: $${project2.calculateTotalPayout()}`);