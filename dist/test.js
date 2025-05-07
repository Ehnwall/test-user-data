// test.js
import { generateUsers, getMaleUsers } from './index.js';
// Test basic generation
console.log("Generating 2 users:");
console.log(JSON.stringify(generateUsers({ count: 2 }), null, 2));
// Test male users generation
console.log("\nGenerating 2 male users:");
console.log(JSON.stringify(getMaleUsers(2), null, 2));
// Generera användare med endast namn och email
const users = generateUsers({
    count: 5,
    includeAge: false,
    includeAddress: false,
    includeCity: false,
    includeZip: false
});
// Resultat:
[
    {
        "firstName": "Emma",
        "lastName": "Johansson",
        "email": "emma.johansson@gmail.com"
    },
    // ...osv
];
