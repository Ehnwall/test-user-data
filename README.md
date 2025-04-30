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
## Basic Usage

```import { generateUsers } from 'swedish-test-users';

// Generate 10 random Swedish users
const users = generateUsers({ count: 10 });
console.log(users);```


[![npm version](https://img.shields.io/npm/v/swedish-test-users.svg)](https://www.npmjs.com/package/swedish-test-users)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)