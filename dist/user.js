import UserData from "./UserData.js";
// exempel på Use-klassen
export default class User {
    constructor() {
        this.firstName = "";
        this.lastName = "";
    }
    // Statisk metod för att generera ett antal användare
    static getNUsers(numb) {
        const list = [];
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
            // Välj en slumpmässig stad från städer-arrayen i swedishCities-objektet
            const cities = UserData.swedishCities[0].städer; // Hämta städer-arrayen från det första objektet i swedishCities
            const cityInfo = cities[Math.floor(Math.random() * cities.length)];
            // Sätt stad, adress och postnummer från den valda staden
            user.city = cityInfo.stad;
            user.adress = cityInfo.adress;
            user.zip = cityInfo.postnummer;
            // Lägg till ett slumpmässigt gatunummer (1-100) till adressen
            const streetNumber = Math.floor(Math.random() * 100) + 1;
            // Extrahera gatunamnet och lägg till det slumpmässiga numret
            const parts = cityInfo.adress.split(" ");
            const lastPart = parts[parts.length - 1];
            const isNumber = !isNaN(parseInt(lastPart));
            if (isNumber) {
                // Om adressen redan innehåller ett nummer, ersätt det
                parts.pop();
                user.adress = `${parts.join(" ")} ${streetNumber}`;
            }
            else {
                // Annars lägg till numret
                user.adress = `${cityInfo.adress} ${streetNumber}`;
            }
            list.push(user);
        }
        return list;
    }
}
