import { MembershipInvoice } from "./exp4a3.js";
import { GymMember } from "./exp4a2.js";

const client: GymMember = {
    fullName: "Jordan",
    age: 28,
    membershipTier: "Premium"
};

const invoice = new MembershipInvoice(client, 120, 9921);

invoice.printInvoice();