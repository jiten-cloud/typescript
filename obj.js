"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));
const obj = {
    name: "jitender",
    age: 27,
    hobbies: ["paying cricket", "watching movies"],
    role: Role.ADMIN
};
for (let hobby of obj.hobbies) {
    console.log(hobby.toUpperCase());
}
