import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    serviceType: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getLatestEnquiries(limit: bigint): Promise<Array<Enquiry>>;
    initializeAdmin(adminPrincipal: Principal): Promise<void>;
    submitEnquiry(name: string, email: string, phone: string, serviceType: string, message: string): Promise<void>;
}
