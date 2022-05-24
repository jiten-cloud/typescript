 enum Role {ADMIN='ADMIN',USER="USER"}
const obj = {
    name:"jitender",
    age:27,
    hobbies:["paying cricket","watching movies"],
    role:Role.ADMIN
}
for(let hobby of  obj.hobbies){
console.log(hobby.toUpperCase())
}