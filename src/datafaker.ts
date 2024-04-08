import { Car, CarType } from './classes/Car.js'; 

function generateFakeCars(count: number): Car[] {
    const cars: Car[] = [];

    const carTypes: CarType[] = [CarType.SUV, CarType.SEDAN, CarType.CROSSOVER];

    const brands: string[] = [
        "Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Nissan", "Hyundai",
        "Volvo", "Jeep", "Lexus", "Kia", "Mazda", "Subaru", "Tesla", "Porsche", "Jaguar", "Infiniti",
        "Cadillac", "Ferrari", "Land Rover", "Lamborghini", "Maserati", "Acura", "Bentley", "Buick", "Lincoln",
        "Rolls-Royce", "MINI", "Alfa Romeo", "Fiat", "Genesis", "Mitsubishi", "McLaren", "Smart", "Maybach", "Bugatti",
        "Chrysler", "GMC", "Dodge", "Ram", "Suzuki", "Hummer", "Pontiac", "Saab", "Saturn", "Scion",
        "Aston Martin", "Lotus", "Citroen", "Peugeot", "Dacia", "Geely", "Great Wall", "Lada", "BYD", "Zotye",
        "Changan", "Foton", "Haval", "JAC", "Brilliance", "Roewe", "Wuling", "Mahindra", "Tata", "Koenigsegg",
        "Spyker", "Pagani", "Daihatsu", "Perodua", "Proton", "Troller", "Shelby", "Gumpert", "Ruf", "Dacia",
        "Holden", "HSV", "Opel", "Vauxhall", "MG", "Morgan", "TVR", "Venturi", "Wiesmann", "Zenvo",
        "Noble", "Faraday Future", "Lucid Motors", "Rivian", "Rimac", "Karma Automotive", "Polestar", "Cupra", "Nio", "VinFast"
    ];

    const models: string[] = [
        "Corolla", "Civic", "F-150", "Malibu", "X5", "C-Class", "A4", "Golf", "Altima", "Elantra",
        "Camry", "Accord", "Mustang", "Cruze", "3 Series", "E-Class", "A3", "Jetta", "Maxima", "Sonata",
        "RAV4", "Pilot", "Escape", "Equinox", "5 Series", "S-Class", "A6", "Passat", "Sentra", "Accent",
        "Highlander", "CR-V", "Explorer", "Traverse", "7 Series", "GLC", "A8", "Tiguan", "Versa", "Veloster",
        "RAV4 Hybrid", "Fit", "Expedition", "Blazer", "X3", "GLA", "Q5", "Atlas", "Rogue", "Kona",
        "Tacoma", "Ridgeline", "F-250", "Silverado", "X7", "GLE", "Q7", "Touareg", "Murano", "Tucson",
        "Sienna", "Odyssey", "Fusion", "Impala", "4 Series", "CLS", "Q3", "Tiguan Allspace", "Rogue Sport", "Santa Fe",
        "Prius", "Insight", "Fiesta", "Spark", "2 Series", "C-Class Coupe", "A7", "Passat Alltrack", "Qashqai", "Kicks",
        "Avalon", "TLX", "Optima", "Malibu Hybrid", "X2", "CLA", "Q50", "Golf Alltrack", "Juke", "Ioniq"
    ];

    for (let i = 0; i < count; i++) {
        const carId = Symbol(`Car${i + 1}`);
        const carType = carTypes[Math.floor(Math.random() * carTypes.length)];
        const brand = brands[i];
        const model = models[i];
        const maxSpeed = Math.floor(Math.random() * (300 - 100 + 1)) + 100; // Adjust min and max speed as needed

        const car = new Car(carId, carType, brand, model, maxSpeed);
        cars.push(car);
    }

    return cars;
}

// Generate fake data for 100 cars
const fakeCars = generateFakeCars(100);

// Export the fake data as a JSON file
import * as fs from 'fs';
fs.writeFileSync('cars.json', JSON.stringify(fakeCars));

console.log('Fake data generated and saved to cars.json');
