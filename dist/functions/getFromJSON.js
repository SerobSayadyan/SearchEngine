// import fs from "fs";
// import { User } from "../classes/User.js";
export function getUsersFromJson() {
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
