import { User } from "../classes/User.js";
import { PriorityDataType, PriorityList } from "../dataStructure/PriorityList.js";

export function stringContains(users: User[], ...args: string[]): PriorityDataType<User>[] {
	const retUsers: PriorityList<User> = new PriorityList();

	for (const user of users) {
		let userRating: number = 0;
		for (const arg of args) {
			userRating += userRatingCounter(user, arg);

			if (userRating && !retUsers.contains(user)) {
				retUsers.insertData(user, userRating);
				break;
			}
		}
	}

	return retUsers.getData();
}

function userRatingCounter(user: User, searchName: string): number {
	//counting avarage rating of the user
	const nameRating = contains(user.firstName, searchName);
	const lastNameRating = contains(user.lastName, searchName);
	return nameRating + lastNameRating;
}

function contains(str: string, subString: string): number {
	if (str.length === 0 || subString.length === 0) {
		return 0;
	}

	let rating = 10;

	if (str.length === subString.length && str.toLowerCase() === subString.toLowerCase()) {
		rating = 21;
		return rating;
	}

	let subCharArray: string[] = subString.toLowerCase().split("");
	let stringCharArray: string[] = str.toLowerCase().split("");

	if (subCharArray[0] === stringCharArray[0]) {
		if (subCharArray[1] === stringCharArray[1]) {
			rating += 5;
		} else {
			rating++;
		}
	}

	let k: number = 0;
	let deratinger = 1;
	for (let i = 0; i < str.length; ++i) {
		if (stringCharArray[i] === subCharArray[k++]) {
			if (k >= subCharArray.length) {
				return rating;
			}
		} else if (stringCharArray[i] === subCharArray[k + 1]) {
			rating -= deratinger++;
			if (rating <= 0) {
				return 0;
			}
			if (k >= subCharArray.length) {
				return rating;
			}
			k += 2;
		} else {
			k = 0;
		}
	}
	return 0;
}
