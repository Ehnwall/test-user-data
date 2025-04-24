import User from "./user.js"
export function logMessage() {
    console.log("Hej från mitt npm-paket!");
}

const createdUser = User.getNUsers(1)
console.log(createdUser)