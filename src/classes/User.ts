import { Car } from "./Car.js";

export class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly age: number,
        readonly posts: string[],
        readonly friends: string[]
    ) { };
}

export enum UserType {
    PERSON, ORGANIZATION
}