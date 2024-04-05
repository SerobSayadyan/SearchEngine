import { stringContains } from "./functions/stringContains.js";
import { getUsersFromJson } from "./functions/getFromJSON.js";

document.addEventListener("DOMContentLoaded", () => {
	const inputElement = document.getElementById("inputValue");
	const submitButton = document.getElementById("submitButton");
	const resultsContainer = document.getElementById("searchResults");

	if (submitButton) {
		// Check if submitButton exists
		submitButton.addEventListener("click", async function () {
			const value = inputElement.value.trim(); // Get the value from the input and trim any leading/trailing whitespace

			if (value) {
				inputElement.value = ""; // Clear the input field

				// Invoke searchInUsers with the input value
				await searchInUsers(value);
			} else {
				console.log("Please enter a valid value.");
			}
		});

		async function searchInUsers(keywordToSearch) {
			let users = await getUsersFromJson();
			let retUsers = stringContains(users, keywordToSearch);
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

			// for (const user of retUsers) {
			//     console.log(`{firstName: ${user.obj.firstName}, lastName: ${user.obj.lastName}, age: ${user.obj.age}, posts: ${user.obj.posts}, friends: ${user.obj.friends}} priority: ${user.priority}`);
			// }
		}
	}
});
