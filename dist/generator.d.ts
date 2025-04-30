import User from './user.js';
import { UserGenerationOptions } from './types.js';
/**
 * Generate users with specified options
 * @param options Options to customize generated users
 * @returns Array of User objects
 */
export declare function generateUsers(options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generate male users with specified options
 * @param count Number of users to generate
 * @param options Additional options
 * @returns Array of User objects
 */
export declare function getMaleUsers(count: number, options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generate female users with specified options
 * @param count Number of users to generate
 * @param options Additional options
 * @returns Array of User objects
 */
export declare function getFemaleUsers(count: number, options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generate users with addresses, including city and zip
 * @param count Number of users to generate
 * @param options Additional options
 * @returns Array of User objects
 */
export declare function getUsersWithAddresses(count: number, options?: Partial<UserGenerationOptions>): Partial<User>[];
/**
 * Generate users with only first and last names
 * @param count Number of users to generate
 * @returns Array of User objects with basic information
 */
export declare function getBasicUsers(count: number): Partial<User>[];
