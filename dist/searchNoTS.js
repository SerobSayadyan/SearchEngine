import { getUsersFromJson, getCarsFromJson } from "./functions/getFromJSON.js";
import { usersThatMatch, carsThatMatch } from "./functions/matchers.js";

document.addEventListener("DOMContentLoaded", () => {
	const inputElement = document.getElementById("inputValue");
	const submitButton = document.getElementById("submitButton");
	const usersResults = document.getElementById("usersResults");
	const carsResults = document.getElementById("carsResults");

	if (submitButton) {
		// Check if submitButton exists
		submitButton.addEventListener("click", async function () {
			const value = inputElement.value.trim(); // Get the value from the input and trim any leading/trailing whitespace

			if (value) {
				inputElement.value = ""; // Clear the input field
				
				// Clear previous search results
				while (usersResults.firstChild) {
					usersResults.removeChild(usersResults.firstChild);
				}
				while (carsResults.firstChild) {
					carsResults.removeChild(carsResults.firstChild);
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
				userDiv.innerHTML = `First Name: <b>${user.obj.firstName}</b>, Last Name: <b>${user.obj.lastName}</b>, Age: <b>${user.obj.age}</b>, Posts: <b>${user.obj.posts}</b>, Friends: <b>${user.obj.friends}</b>, Priority: <b>${user.priority}</b>`;
				usersResults.appendChild(userDiv);
			});
		}

		async function searchInCars(keywordToSearch) {
			let cars = await getCarsFromJson();
			let retCars = carsThatMatch(cars, keywordToSearch);

			// Display search results
			retCars.forEach((car) => {
				const carDiv = document.createElement("div");
				carDiv.innerHTML = `Brand: <b>${car.obj.brand}</b>, model: <b>${car.obj.model}</b>, type: <b>${car.obj.carType}</b>, maxSpeed: <b>${car.obj.maxSpeed}</b>, ID: <b>${car.obj.carI}</b>, Priority: <b>(${car.priority})</b>`;
				carsResults.appendChild(carDiv);
			});
		}
	}
});
