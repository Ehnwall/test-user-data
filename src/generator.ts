// generator.ts
import User from './user.js';
import UserData from './UserData.js';
import { UserGenerationOptions, DEFAULT_OPTIONS } from './types.js';

/**
 * Generera användare med angivna alternativ
 * @param options Alternativ för att anpassa genererade användare
 * @returns Array med User-objekt
 */
export function generateUsers(options: Partial<UserGenerationOptions> = {}): Partial<User>[] {
  // Sammanfoga angivna alternativ med standardalternativen
  const mergedOptions: UserGenerationOptions = { ...DEFAULT_OPTIONS, ...options };
  
  // Validera alternativen
  if (mergedOptions.count < 1) throw new Error('Antalet måste vara minst 1');
  
  // Eftersom vi sammanfogade med DEFAULT_OPTIONS borde dessa egenskaper existera,
  // men låt oss lägga till en typkontroll för säkerhets skull
  if (mergedOptions.ageMin !== undefined && 
      mergedOptions.ageMax !== undefined && 
      mergedOptions.ageMin > mergedOptions.ageMax) {
    throw new Error('Lägsta ålder kan inte vara större än högsta ålder');
  }
  
  // Generera grundanvändare
  const users = User.getNUsers(mergedOptions.count);
  
  // Tillämpa könsfilter om det behövs
  let filteredUsers = users;
  if (mergedOptions.gender === 'male') {
    // Filtrera fram manliga användare baserat på förnamn
    filteredUsers = users.filter((user: User) => {
      return UserData.maleFirstName.includes(user.firstName);
    });
    
    // Säkerställ att vi har det begärda antalet användare
    while (filteredUsers.length < mergedOptions.count) {
      const additionalUsers = User.getNUsers(mergedOptions.count - filteredUsers.length)
        .filter((user: User) => UserData.maleFirstName.includes(user.firstName));
      filteredUsers = [...filteredUsers, ...additionalUsers];
    }
  } else if (mergedOptions.gender === 'female') {
    // Filtrera fram kvinnliga användare baserat på förnamn
    filteredUsers = users.filter((user: User) => {
      return UserData.femaleFirstName.includes(user.firstName);
    });
    
    // Säkerställ att vi har det begärda antalet användare
    while (filteredUsers.length < mergedOptions.count) {
      const additionalUsers = User.getNUsers(mergedOptions.count - filteredUsers.length)
        .filter((user: User) => UserData.femaleFirstName.includes(user.firstName));
      filteredUsers = [...filteredUsers, ...additionalUsers];
    }
  }
  
  // Ta bara exakt det begärda antalet (ifall vi fick extra)
  filteredUsers = filteredUsers.slice(0, mergedOptions.count);
  
  // Filtrera bort oönskade attribut
  return filteredUsers.map((user: User) => {
    const filteredUser: Partial<User> = {
      firstName: user.firstName,
      lastName: user.lastName
    };
    
    // Inkludera ytterligare attribut baserat på alternativen
    if (mergedOptions.includeAge) filteredUser.age = user.age;
    if (mergedOptions.includeEmail) filteredUser.email = user.email;
    if (mergedOptions.includeAddress) filteredUser.adress = user.adress; // OBS: Möjligt stavfel här (adress vs address)
    if (mergedOptions.includeCity) filteredUser.city = user.city;
    if (mergedOptions.includeZip) filteredUser.zip = user.zip;
    
    return filteredUser;
  });
}

/**
 * Generera manliga användare med angivna alternativ
 * @param count Antal användare att generera
 * @param options Ytterligare alternativ
 * @returns Array med User-objekt
 */
export function getMaleUsers(count: number, options: Partial<UserGenerationOptions> = {}): Partial<User>[] {
  return generateUsers({ ...options, count, gender: 'male' });
}

/**
 * Generera kvinnliga användare med angivna alternativ
 * @param count Antal användare att generera
 * @param options Ytterligare alternativ
 * @returns Array med User-objekt
 */
export function getFemaleUsers(count: number, options: Partial<UserGenerationOptions> = {}): Partial<User>[] {
  return generateUsers({ ...options, count, gender: 'female' });
}

/**
 * Generera användare med adresser, inklusive stad och postnummer
 * @param count Antal användare att generera
 * @param options Ytterligare alternativ
 * @returns Array med User-objekt
 */
export function getUsersWithAddresses(count: number, options: Partial<UserGenerationOptions> = {}): Partial<User>[] {
  return generateUsers({
    ...options,
    count,
    includeAddress: true,
    includeCity: true,
    includeZip: true
  });
}

/**
 * Generera användare med endast för- och efternamn
 * @param count Antal användare att generera
 * @returns Array med User-objekt med grundläggande information
 */
export function getBasicUsers(count: number): Partial<User>[] {
  return generateUsers({
    count,
    includeAge: false,
    includeEmail: false, 
    includeAddress: false,
    includeCity: false,
    includeZip: false
  });
}