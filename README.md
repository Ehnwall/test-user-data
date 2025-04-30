# Swedish Test Users

A TypeScript package for generating realistic Swedish test user data with authentic names, addresses, and more.

## Features

- Generate random Swedish test users with realistic data
- Customize which attributes to include (name, age, email, address, etc.)
- Filter by gender (male/female)
- 100 authentic Swedish cities with real postal codes and street addresses
- Properly formatted Swedish names and emails

## Installation

```bash
npm install swedish-test-users
```
## Usage
### Basic Usage
``` typescript
import { generateUsers } from 'swedish-test-users';

// Generate 10 random Swedish users
const users = generateUsers({ count: 10 });
console.log(users); 
```

### Filter By Gender
``` typescript
import { getMaleUsers, getFemaleUsers } from 'swedish-test-users';

// Generate 5 male users
const maleUsers = getMaleUsers(5);

// Generate 5 female users
const femaleUsers = getFemaleUsers(5);
```
## API Reference
### (generatedUser(options))
Generates an array of random Swedish users.
## Parameters
- options  (Object): Configuration options
- count (Number): How many users to generate (default: 1)
- gender (String): 'male', 'female', or 'mixed' (default: 'mixed')
- includeAge (Boolean):  Include age (default: true)
- includeEmail (Boolean): Include email address (default: true)
- includeAddress (Boolean): Include street address (default: true)
- includeCity (Boolean): Include city (default: true)
- includeZip (Boolean): Include postal code (default: true)
- ageMin (Number): Minimum age (default: 18)
- ageMax (Number): Maximum age (default: 99)

## Helper Functions
- getMaleUsers(count, options): Generate male users
- getFemaleUsers(count, options): Generate female users
- -getBasicUsers(count): Generate users with only first and last names
- getUsersWithAddresses(count, options): Generate users with complete address information

## Example Output

``` typescript
[
  {
    "firstName": "Erik",
    "lastName": "Lindström",
    "age": 42,
    "email": "erik.lindstrom@gmail.com",
    "adress": "Storgatan 17",
    "city": "Norrköping",
    "zip": "602 27"
  },
  {
    "firstName": "Anna",
    "lastName": "Johansson",
    "age": 35,
    "email": "anna.johansson@hotmail.com",
    "adress": "Drottninggatan 23",
    "city": "Stockholm",
    "zip": "111 52"
  }
]
```

## Data Source
This package includes 
- 100+ Swedish male first names
- 100+ Swedish female first names
- 100+ Swedish family names
- 100 real Swedish cities with authentic postal codes and street addresses

# License 
MIT
# Author
Dennis Ehnwall
# Contributing
Contributions are welcome! Please feel free to submit a Pull Request.