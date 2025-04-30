// generator.ts
import User from './user.js';
import UserData from './UserData.js';
import { UserGenerationOptions, DEFAULT_OPTIONS } from './types.js';
/**
 * Generate users with specified options
 * @param options Options to customize generated users
 * @returns Array of User objects
 */
export function generateUsers(options: Partial<UserGenerationOptions> = {}): Partial<User>[] {
  // Merge provided options with defaults
  const mergedOptions: UserGenerationOptions = { ...DEFAULT_OPTIONS, ...options };
  
  // Validate options
  if (mergedOptions.count < 1) throw new Error('Count must be at least 1');
  
  // Since we merged with DEFAULT_OPTIONS, these properties should exist,
  // but let's add a type guard just to be safe
  if (mergedOptions.ageMin !== undefined && 
      mergedOptions.ageMax !== undefined && 
      mergedOptions.ageMin > mergedOptions.ageMax) {
    throw new Error('ageMin cannot be greater than ageMax');
  }
  
  // Generate base users
  const users = User.getNUsers(mergedOptions.count);
  
  // Apply gender filter if needed
  let filteredUsers = users;
  if (mergedOptions.gender === 'male') {
    filteredUsers = users.filter((user: User) => {
      return UserData.maleFirstName.includes(user.firstName);
    });
    
    // Ensure we have the requested count
    while (filteredUsers.length < mergedOptions.count) {
      const additionalUsers = User.getNUsers(mergedOptions.count - filteredUsers.length)
        .filter((user: User) => UserData.maleFirstName.includes(user.firstName));
      filteredUsers = [...filteredUsers, ...additionalUsers];
    }
  } else if (mergedOptions.gender === 'female') {
    filteredUsers = users.filter((user: User) => {
      return UserData.femaleFirstName.includes(user.firstName);
    });
    
    // Ensure we have the requested count
    while (filteredUsers.length < mergedOptions.count) {
      const additionalUsers = User.getNUsers(mergedOptions.count - filteredUsers.length)
        .filter((user: User) => UserData.femaleFirstName.includes(user.firstName));
      filteredUsers = [...filteredUsers, ...additionalUsers];
    }
  }
  
  // Take only the exact requested count (in case we got extras)
  filteredUsers = filteredUsers.slice(0, mergedOptions.count);
  
  // Filter out unwanted attributes
  return filteredUsers.map((user: User) => {
    const filteredUser: Partial<User> = {
      firstName: user.firstName,
      lastName: user.lastName
    };
    
    if (mergedOptions.includeAge) filteredUser.age = user.age;
    if (mergedOptions.includeEmail) filteredUser.email = user.email;
    if (mergedOptions.includeAddress) filteredUser.adress = user.adress;
    if (mergedOptions.includeCity) filteredUser.city = user.city;
    if (mergedOptions.includeZip) filteredUser.zip = user.zip;
    
    return filteredUser;
  });
}

/**
 * Generate male users with specified options
 * @param count Number of users to generate
 * @param options Additional options
 * @returns Array of User objects
 */
export function getMaleUsers(count: number, options: Partial<UserGenerationOptions> = {}): Partial<User>[] {
  return generateUsers({ ...options, count, gender: 'male' });
}

/**
 * Generate female users with specified options
 * @param count Number of users to generate
 * @param options Additional options
 * @returns Array of User objects
 */
export function getFemaleUsers(count: number, options: Partial<UserGenerationOptions> = {}): Partial<User>[] {
  return generateUsers({ ...options, count, gender: 'female' });
}

/**
 * Generate users with addresses, including city and zip
 * @param count Number of users to generate
 * @param options Additional options
 * @returns Array of User objects
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
 * Generate users with only first and last names
 * @param count Number of users to generate
 * @returns Array of User objects with basic information
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