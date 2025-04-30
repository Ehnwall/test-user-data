export default class User {
    firstName: string;
    lastName: string;
    age?: number;
    email?: string;
    city?: string;
    adress?: string;
    zip?: string;
    static getNUsers(numb: number): User[];
}
