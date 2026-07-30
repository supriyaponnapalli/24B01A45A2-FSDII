import { DISCOUNT_PERCENTAGE, FLAT_SHIPPING_FEE } from "./exp4a1.js";
import { GymMember } from "./exp4a2.js";

export class MembershipInvoice {

    constructor(
        public member: GymMember,
        private basePrice: number,
        public invoiceNumber: number
    ) { }

    public calculateTotal(): number {
        const discount = this.basePrice * DISCOUNT_PERCENTAGE;
        return this.basePrice - discount + FLAT_SHIPPING_FEE;
    }

    public printInvoice(): void {
        console.log("------ Membership Invoice ------");
        console.log(`Member Name : ${this.member.fullName}`);
        console.log(`Age         : ${this.member.age}`);

        if (this.member.membershipTier) {
            console.log(`Tier        : ${this.member.membershipTier}`);
        }

        console.log(`Invoice No  : ${this.invoiceNumber}`);
        console.log(`Base Price  : $${this.basePrice}`);
        console.log(`Total Due   : $${this.calculateTotal()}`);
        console.log("--------------------------------");
    }
}