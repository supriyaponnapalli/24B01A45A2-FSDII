class WarehouseItem {
    public itemName: string;
    public manufacturer: string;
    public unitCost: number;
    public stockCount: number;

    constructor(itemName: string, manufacturer: string, unitCost: number = 150, stockCount: number = 1) {
        this.itemName = itemName;
        this.manufacturer = manufacturer;
        this.unitCost = unitCost;
        this.stockCount = stockCount;
    }

    public computeTotalAssetValue(): number {
        return this.unitCost * this.stockCount;
    }

    public printItemSummary(): void {
        console.log("=== Warehouse Item Summary ===");
        console.log(`Item Name    : ${this.itemName}`);
        console.log(`Manufacturer : ${this.manufacturer}`);
        console.log(`Unit Cost    : $${this.unitCost}`);
        console.log(`Stock Count  : ${this.stockCount}`);
        console.log(`Total Value  : $${this.computeTotalAssetValue()}`);
        console.log("==============================\n");
    }
}

const item1 = new WarehouseItem("Wireless Mouse", "Logitech");
const item2 = new WarehouseItem("Mechanical Keyboard", "Keychron", 120, 5);

item1.printItemSummary();
item2.printItemSummary();

item2.stockCount = 10;

console.log(`Updated Asset Value for ${item2.itemName}: $${item2.computeTotalAssetValue()}`);