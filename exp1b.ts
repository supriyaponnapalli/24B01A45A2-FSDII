let x: any = 1;
x = "hi";
x = true;

let y: unknown = "test";

if (typeof y == "string") {
    console.log(y.length);
}

function show(m: string): void {
    console.log(m);
}

show("done");