export interface GymMember {
    fullName: string;
    age: number;
    membershipTier?: "Basic" | "Premium" | "VIP";
}