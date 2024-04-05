export class Car {
    constructor(
        readonly carId: symbol,
        readonly carType: CarType,
        readonly brand: string,
        readonly model: string,
        readonly maxSpeed: number
    ) { }
}

export enum CarType {
    SUV, SEDAN, CROSSOVER
}