// test.js
import { generateUsers, getMaleUsers, getFemaleUsers } from './index.js';

// Test basic generation
console.log("Generating 2 users:");
console.log(JSON.stringify(generateUsers({ count: 2 }), null, 2));

// Test male users generation
console.log("\nGenerating 2 male users:");
console.log(JSON.stringify(getMaleUsers(2), null, 2));