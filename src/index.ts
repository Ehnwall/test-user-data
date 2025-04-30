// src/index.ts
import User from './user.js';
import { generateUsers, getMaleUsers, getFemaleUsers, getUsersWithAddresses, getBasicUsers } from './generator.js';
import { UserGenerationOptions } from './types.js';

export { User, generateUsers, getMaleUsers, getFemaleUsers, getUsersWithAddresses, getBasicUsers, UserGenerationOptions };

// Default export for convenience
export default {
  generateUsers,
  getMaleUsers,
  getFemaleUsers,
  getUsersWithAddresses,
  getBasicUsers
};

// Add this code to execute when index.js is run directly
// This checks if the file is being executed directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("Swedish Test Users Package");
  console.log("=========================\n");
  
  console.log("Example: 2 random users");
  console.log(JSON.stringify(generateUsers({ count: 2 }), null, 2));
  
  console.log("\nExample: 2 male users");
  console.log(JSON.stringify(getMaleUsers(2), null, 2));
  
  console.log("\nExample: 2 female users");
  console.log(JSON.stringify(getFemaleUsers(2), null, 2));
}