
function calculateBillStandard(subtotal: number, tipPercentage: number): number {
    const tipAmount = subtotal * tipPercentage;
    return subtotal + tipAmount;
}


const calculateBillArrow = (subtotal: number, tipPercentage: number): number => 
    subtotal * (1 + tipPercentage);


const generateWelcomeMessage = (guestName: string, restaurantName: string): string => 
    `Welcome, ${guestName}! We hope you enjoy your meal at ${restaurantName}.`;


const mealCost: number = 85.50;
const gratuityRate: number = 0.18; 


console.log(generateWelcomeMessage("Alex", "The Rusty Fork"));

const finalBillStandard = calculateBillStandard(mealCost, gratuityRate);
console.log(`Standard Calculation: $${finalBillStandard.toFixed(2)}`);

const finalBillArrow = calculateBillArrow(mealCost, gratuityRate);
console.log(`Arrow Calculation: $${finalBillArrow.toFixed(2)}`);