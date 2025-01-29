export class User {
    name: string
    sureName: string
    age: number
    phone: string
    address: string
    consentGiven: boolean | undefined


    constructor(name: string, sureName: string, age:number, phone: string, address: string) {
        this.name = name;
        this.sureName = sureName;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.consentGiven = undefined;
    }
}