class CloudInstance {
    public serverType: string;
    public region: string;
    public hourlyRate: number;
    public uptimeHours: number;

    constructor(serverType: string, region: string, hourlyRate: number = 0.05, uptimeHours: number = 1) {
        this.serverType = serverType;
        this.region = region;
        this.hourlyRate = hourlyRate;
        this.uptimeHours = uptimeHours;
    }

    public calculateTotalBill(): number {
        return this.hourlyRate * this.uptimeHours;
    }

    public printInstanceDetails(): void {
        console.log("=== Cloud Instance Details ===");
        console.log(`Server Type  : ${this.serverType}`);
        console.log(`Region       : ${this.region}`);
        console.log(`Hourly Rate  : $${this.hourlyRate}`);
        console.log(`Uptime Hours : ${this.uptimeHours}`);
        console.log(`Total Bill   : $${this.calculateTotalBill()}`);
        console.log("==============================\n");
    }
}

const server1 = new CloudInstance("t3.micro", "us-east-1");
const server2 = new CloudInstance("m5.large", "eu-west-1", 0.15, 12);

server1.printInstanceDetails();
server2.printInstanceDetails();

server2.uptimeHours = 48;

console.log(`Updated Bill for ${server2.serverType}: $${server2.calculateTotalBill()}`);