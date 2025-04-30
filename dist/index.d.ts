import User from './user.js';
import { generateUsers, getMaleUsers, getFemaleUsers, getUsersWithAddresses, getBasicUsers } from './generator.js';
import { UserGenerationOptions } from './types.js';
export { User, generateUsers, getMaleUsers, getFemaleUsers, getUsersWithAddresses, getBasicUsers, UserGenerationOptions };
declare const _default: {
    generateUsers: typeof generateUsers;
    getMaleUsers: typeof getMaleUsers;
    getFemaleUsers: typeof getFemaleUsers;
    getUsersWithAddresses: typeof getUsersWithAddresses;
    getBasicUsers: typeof getBasicUsers;
};
export default _default;
