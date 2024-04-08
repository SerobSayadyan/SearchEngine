// import fs from "fs";
// import { User } from "../classes/User.js";


// // Read the JSON file asynchronously
// export function getUsersFromJson(): Promise<User[]> {
//   return new Promise((resolve, reject) => {
//     fs.readFile("./dist/users.json", "utf8", (err, data) => {
//       if (err) {
//         console.error("Error reading file:", err);
//         reject(err); // Reject the promise if there's an error
//         return;
//       }
  
//       try {
//         // Parse JSON data
//         const users: User[] = JSON.parse(data);

//         resolve(users); // Resolve the promise with the users array
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//         reject(error); // Reject the promise if there's an error parsing JSON
//       }
//     });
//   });
// }


import { Car } from "../classes/Car.js";
import { User } from "../classes/User.js";

export function getUsersFromJson(): Promise<User[]> {
  return fetch("./dataJson/users.json") // Fetch the JSON file from the server
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch users.json: ${response.statusText}`);
      }
      return response.json(); // Parse the response as JSON
    })
    .then(data => {
      // Process the JSON data and return it
      return data;
    })
    .catch(error => {
      console.error("Error fetching users.json:", error);
      throw error; // Propagate the error
    });
}

export function getCarsFromJson(): Promise<Car[]> {
  return fetch("./dataJson/cars.json") // Fetch the JSON file from the server
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch cars.json: ${response.statusText}`);
      }
      return response.json(); // Parse the response as JSON
    })
    .then(data => {
      // Process the JSON data and return it
      return data;
    })
    .catch(error => {
      console.error("Error fetching cars.json:", error);
      throw error; // Propagate the error
    });
}
