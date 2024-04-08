import { getUsersFromJson, getCarsFromJson } from "./functions/getFromJSON.js";
import { usersThatMatch, carsThatMatch } from "./functions/matchers.js";

document.addEventListener("DOMContentLoaded", () => {
	const inputElement = document.getElementById("inputValue");
	const submitButton = document.getElementById("submitButton");
	const usersContainer = document.getElementById("usersResults");
	const carsContainer = document.getElementById("carsResults");

	if (submitButton) {
		// Check if submitButton exists
		submitButton.addEventListener("click", async function () {
			const value = inputElement.value.trim(); // Get the value from the input and trim any leading/trailing whitespace

			if (value) {
				inputElement.value = ""; // Clear the input field
				
				// Clear previous search results
				while (usersContainer.firstChild) {
					usersContainer.removeChild(usersContainer.firstChild);
				}

				// Invoke searchInUsers with the input value
				await searchInUsers(value);
				await searchInCars(value);
			} else {
				console.log("Please enter a valid value.");
			}
		});

		async function searchInUsers(keywordToSearch) {
			let users = await getUsersFromJson();
			let retUsers = usersThatMatch(users, keywordToSearch);

			// Display search results
			retUsers.forEach((user) => {
				const userDiv = document.createElement("div");
				userDiv.textContent = `First Name: ${user.obj.firstName}, Last Name: ${user.obj.lastName}, Age: ${user.obj.age}, Posts: ${user.obj.posts}, Friends: ${user.obj.friends}, Priority: ${user.priority}`;
				usersContainer.appendChild(userDiv);
			});

			// for (const user of retUsers) {
			//     console.log(`{firstName: ${user.obj.firstName}, lastName: ${user.obj.lastName}, age: ${user.obj.age}, posts: ${user.obj.posts}, friends: ${user.obj.friends}} priority: ${user.priority}`);
			// }
		}

		async function searchInCars(keywordToSearch) {
			let cars = await getCarsFromJson();
			let retCars = carsThatMatch(cars, keywordToSearch);

			// Display search results
			retCars.forEach((car) => {
				const carDiv = document.createElement("div");
				carDiv.textContent = `Brand: ${car.obj.brand}, model: ${car.obj.model}, type: ${car.obj.carType}, maxSpeed: ${car.obj.maxSpeed}, ID: ${car.obj.carI}, Priority: (${car.priority})`;
				carsContainer.appendChild(carDiv);
			});
		}
	}
});
