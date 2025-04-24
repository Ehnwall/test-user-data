import UserData from "./UserData.js";
export default class User {
    firstName;
    lastName;
    email;
    adress;
    age;
    static getNUsers(numb) {
        const list = [];
        const index = Math.trunc(Math.random() * UserData.maleFirstName.length);
        const user = new User();
        user.firstName = UserData.maleFirstName[index];
        list.push(user);
        return list;
    }
}
