"use strict";
class Box {
    data;
    constructor(data) {
        this.data = data;
    }
    displayData() {
        console.log(this.data);
    }
}
const stringBox = new Box("Hello Generics");
stringBox.displayData();
const numberBox = new Box(100);
numberBox.displayData();
