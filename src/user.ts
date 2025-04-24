import { truncate } from "fs"
import UserData from "./UserData.js"

export default class User{
firstName?: string
lastName?: string
email?: string
adress?: string
age?: number
public static getNUsers(numb: number): User[] {
    const list: User[] = [];
    
    for (let i = 0; i < numb; i++) {
        const index = Math.floor(Math.random() * UserData.maleFirstName.length);
        const user = new User();
        user.firstName = UserData.maleFirstName[index];
        list.push(user);
    }

    return list;
}
}











