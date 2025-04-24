export default class User {
    firstName?: string;
    lastName?: string;
    email?: string;
    adress?: string;
    age?: number;
    static getNUsers(numb: number): User[];
}
