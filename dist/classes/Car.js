export class Car {
    constructor(carId, carType, brand, model, maxSpeed) {
        this.carId = carId;
        this.carType = carType;
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
    }
}
export var CarType;
(function (CarType) {
    CarType[CarType["SUV"] = 0] = "SUV";
    CarType[CarType["SEDAN"] = 1] = "SEDAN";
    CarType[CarType["CROSSOVER"] = 2] = "CROSSOVER";
})(CarType || (CarType = {}));
