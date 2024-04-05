var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const inputElement = document.getElementById("inputValue");
    const submitButton = document.getElementById("submitButton");
    const resultsContainer = document.getElementById("searchResults");
    const valuesArray = []; // Initialize an empty array to store values
    if (submitButton) {
        // Check if submitButton exists
        submitButton.addEventListener("click", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const value = inputElement.value.trim(); // Get the value from the input and trim any leading/trailing whitespace
                if (value) {
                    // Check if the value is not empty
                    valuesArray.push(value); // Push the value into the array
                    alert(`Value added: ${value}`);
                    alert(`Array:  ${valuesArray}`);
                    inputElement.value = ""; // Clear the input field
                    // Invoke searchInUsers with the input value
                    yield searchInUsers(value);
                }
                else {
                    console.log("Please enter a valid value.");
                }
            });
        });
        function searchInUsers(keywordToSearch) {
            return __awaiter(this, void 0, void 0, function* () {
                let users = yield getUsersFromJson();
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
            });
        }
    }
});
