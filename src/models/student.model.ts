export class Student {
    private firstName: string;
    private middleInitial: string;
    private lastName: string;

    constructor() { }

    getFirstName():string {
        return this.firstName;
    }

    getMiddleInitial():string {
        return this.middleInitial;
    }

    getLastName():string {
        return this.lastName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    setMiddleInitial(middleInitial: string) {
        this.lastName = middleInitial;
    }

    setLastName(lastName:string) {
        this.lastName = lastName;
    }




}