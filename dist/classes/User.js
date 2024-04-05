export class User {
    constructor(firstName, lastName, age, posts, friends) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.posts = posts;
        this.friends = friends;
    }
    ;
}
export var UserType;
(function (UserType) {
    UserType[UserType["PERSON"] = 0] = "PERSON";
    UserType[UserType["ORGANIZATION"] = 1] = "ORGANIZATION";
})(UserType || (UserType = {}));
