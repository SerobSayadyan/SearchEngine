export class Building {
    constructor(
        readonly buildingType: BuildingType,
        readonly address: string,
        readonly buildingNumber: number
    ) { }
}

export enum BuildingType {
    HOME, STORE, CHURCH
}