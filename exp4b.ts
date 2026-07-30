var RentalAgency = {
    rentVehicle: function(vehicleModel: string): void {
        console.log(`${vehicleModel} has been rented.`);
    },

    returnVehicle: function(vehicleModel: string): void {
        console.log(`${vehicleModel} has been returned.`);
    },

    Penalty: {
        calculateDamageFee: function(scratches: number): number {
            return scratches * 150;
        }
    }
};

RentalAgency.rentVehicle("Tesla Model 3");
RentalAgency.returnVehicle("Tesla Model 3");

let damageFee: number = RentalAgency.Penalty.calculateDamageFee(2);
console.log(`Damage Fee = $${damageFee}`);