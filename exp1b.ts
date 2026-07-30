let dynamicData: any = 404;
dynamicData = "Server Not Found";
dynamicData = false;

let unparsedInput: unknown = "System Online";

if (typeof unparsedInput === "string") {
    console.log("Character count of input: " + unparsedInput.length);
}

function printSystemStatus(status: string): void {
    console.log("STATUS: " + status);
}

printSystemStatus("Boot Sequence Initiated");