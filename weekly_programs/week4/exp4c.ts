let statusCodes: Array<number> = [200, 404, 500];
let serverNodes: Array<string> = ["us-east", "eu-west", "ap-south"];

console.log("Status Codes:", statusCodes);
console.log("Server Nodes:", serverNodes);

class StateStore<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        console.log("Retrieving Value...");
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
        console.log("Value Updated Successfully");
    }
}

const activeConnections = new StateStore<number>(150);
console.log("Active Connections:", activeConnections.getValue());

activeConnections.setValue(180);
console.log("Updated Connections:", activeConnections.getValue());

const environment = new StateStore<string>("Production");
console.log("Environment:", environment.getValue());

interface DatabaseConfig {
    host: string;
    port: number;
}

const dbConfigStore = new StateStore<DatabaseConfig>({
    host: "localhost",
    port: 5432
});

console.log("DB Config:", dbConfigStore.getValue());

function getFirstElement<T>(items: T[]): T {
    return items[0];
}

console.log(getFirstElement([100, 200, 300, 400]));
console.log(getFirstElement(["Cyan", "Magenta", "Yellow"]));

function wrapResponse<T>(data: T): { payload: T; source: string } {
    return {
        payload: data,
        source: "API-Gateway"
    };
}

console.log(wrapResponse("Success"));
console.log(wrapResponse(403));

interface Server {
    ip: string;
    os: string;
}

const mainServer: Server = {
    ip: "192.168.1.1",
    os: "Ubuntu"
};

console.log(wrapResponse(mainServer));

interface HasId {
    id: string;
}

function printId<T extends HasId>(entity: T): void {
    console.log(`ID: ${entity.id}`);
}

const userRecord = {
    id: "USR-001",
    role: "Admin"
};

const sessionData = {
    id: "SESS-992",
    token: "abc123xyz"
};

printId(userRecord);
printId(sessionData);

interface HasTimestamp {
    timestamp: number;
}

function showTimestamp<T extends HasTimestamp>(event: T): void {
    console.log(`Timestamp: ${event.timestamp}`);
}

const loginEvent = {
    action: "LOGIN",
    timestamp: 1678886400
};

const logoutEvent = {
    action: "LOGOUT",
    timestamp: 1678890000,
    reason: "Timeout"
};

showTimestamp(loginEvent);
showTimestamp(logoutEvent);

const firstNumber = getFirstElement([8, 16, 24, 32]);
console.log(`First Number: ${firstNumber}`);

const firstPlanet = getFirstElement(["Mars", "Jupiter", "Saturn"]);
console.log(`First Planet: ${firstPlanet}`);