import User from './user.js';
import { UserGenerationOptions } from './types.js';
/**
 * Generera användare med angivna alternativ
 * @param options Alternativ för att anpassa genererade användare
 * @returns Array med User-objekt
 */
export declare function generateUsers(options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generera manliga användare med angivna alternativ
 * @param count Antal användare att generera
 * @param options Ytterligare alternativ
 * @returns Array med User-objekt
 */
export declare function getMaleUsers(count: number, options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generera kvinnliga användare med angivna alternativ
 * @param count Antal användare att generera
 * @param options Ytterligare alternativ
 * @returns Array med User-objekt
 */
export declare function getFemaleUsers(count: number, options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generera användare med adresser, inklusive stad och postnummer
 * @param count Antal användare att generera
 * @param options Ytterligare alternativ
 * @returns Array med User-objekt
 */
export declare function getUsersWithAddresses(count: number, options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generera användare med endast för- och efternamn
 * @param count Antal användare att generera
 * @returns Array med User-objekt med grundläggande information
 */
export declare function getBasicUsers(count: number): Partial<User>[];
