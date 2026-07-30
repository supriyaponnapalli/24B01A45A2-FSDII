class Box<T> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    displayData(): void {
        console.log(this.data);
    }
}

const stringBox = new Box<string>("Hello Generics");
stringBox.displayData();

const numberBox = new Box<number>(100);
numberBox.displayData();