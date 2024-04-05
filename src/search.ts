import { User } from "./classes/User.js";
import { PriorityDataType } from "./dataStructure/PriorityList.js";
import { getUsersFromJson } from "./functions/getFromJSON.js";
import { stringContains } from "./functions/stringContains.js";

// (async function searchInUsers(keywordToSearch: string) {
// 	let users: User[] = await getUsersFromJson();
// 	let retUsers: PriorityDataType<User>[] = stringContains(
// 		users,
// 		keywordToSearch
// 	);
// 	for (const user of retUsers) {
// 		console.log(user.obj, user.priority);
// 	}
// })("st");

document.addEventListener("DOMContentLoaded", () => {
	const inputElement = document.getElementById("inputValue") as HTMLInputElement;
	const submitButton = document.getElementById("submitButton");
	const resultsContainer = document.getElementById("searchResults") as HTMLElement;

	const valuesArray: string[] = []; // Initialize an empty array to store values

	if (submitButton) {
		// Check if submitButton exists
		submitButton.addEventListener("click", async function () {
			const value = inputElement.value.trim(); // Get the value from the input and trim any leading/trailing whitespace

			if (value) {
				// Check if the value is not empty
				valuesArray.push(value); // Push the value into the array
				alert(`Value added: ${value}`);
				alert(`Array:  ${valuesArray}`);
				inputElement.value = ""; // Clear the input field

				// Invoke searchInUsers with the input value
				await searchInUsers(value);
			} else {
				console.log("Please enter a valid value.");
			}
		});

		async function searchInUsers(keywordToSearch: string) {
			let users: User[] = await getUsersFromJson();
			let retUsers: PriorityDataType<User>[] = stringContains(users, keywordToSearch);
			// Clear previous search results
			while (resultsContainer.firstChild) {
				resultsContainer.removeChild(resultsContainer.firstChild);
			}

			// Display search results
			retUsers.forEach((user) => {
				const userDiv = document.createElement("div");
				userDiv.textContent = `First Name: ${user.obj.firstName}, Last Name: ${user.obj.lastName}, Age: ${user.obj.age}, Posts: ${user.obj.posts}, Friends: ${user.obj.friends}, Priority: ${user.priority}`;
				resultsContainer.appendChild(userDiv);
			});
		}
	}
});
