import UserData from "./UserData.js"

export default class User{
firstName?: string
lastName?: string
age?: number
email?: string
city?: string
adress?: string

public static getNUsers(numb: number): User[] {
    const list: User[] = [];
  
    for (let i = 0; i < numb; i++) {
      const user = new User();
  
      // Slumpa kön: 0 = man, 1 = kvinna
      const isMale = Math.random() < 0.5;
  
      // Slumpa förnamn baserat på kön
      const firstName = isMale
        ? UserData.maleFirstName[Math.floor(Math.random() * UserData.maleFirstName.length)]
        : UserData.femaleFirstName[Math.floor(Math.random() * UserData.femaleFirstName.length)];
  
      // Slumpa efternamn
      const lastName = UserData.lastName[Math.floor(Math.random() * UserData.lastName.length)];
      // Slumpa ålder
      const age = UserData.age[Math.floor(Math.random() * UserData.age.length)];
      user.age = age;
      // Sätt förnamn, efternamn och fullständigt namn
      user.firstName = firstName;
      user.lastName = lastName;

      // Sätt e-postadress
      const emailDomain = UserData.emailDomain[Math.floor(Math.random() * UserData.emailDomain.length)];
      // if firstname contains å, ä, ö then replace with a, a, o
     user.email = `${firstName.toLowerCase().replace(/å/g, "a").replace(/ä/g, "a").replace(/ö/g, "o")}.${lastName.toLowerCase().replace(/å/g, "a").replace(/ä/g, "a").replace(/ö/g, "o")}@${emailDomain}`;


      list.push(user);
    }
    
    return list;
}
}













