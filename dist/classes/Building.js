export class Building {
    constructor(buildingType, address, buildingNumber) {
        this.buildingType = buildingType;
        this.address = address;
        this.buildingNumber = buildingNumber;
    }
}
export var BuildingType;
(function (BuildingType) {
    BuildingType[BuildingType["HOME"] = 0] = "HOME";
    BuildingType[BuildingType["STORE"] = 1] = "STORE";
    BuildingType[BuildingType["CHURCH"] = 2] = "CHURCH";
})(BuildingType || (BuildingType = {}));
