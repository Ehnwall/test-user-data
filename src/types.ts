// types.ts
export type UserGenerationOptions = {
    count: number;
    gender?: 'male' | 'female' | 'mixed';
    includeAge?: boolean;
    includeEmail?: boolean;
    includeAddress?: boolean;
    includeCity?: boolean;
    includeZip?: boolean;
    ageMin?: number;
    ageMax?: number;
    locale?: 'sv-SE';
  }
  
  export const DEFAULT_OPTIONS: UserGenerationOptions = {
    count: 1,
    gender: 'mixed',
    includeAge: true,
    includeEmail: true,
    includeAddress: true,
    includeCity: true,
    includeZip: true,
    ageMin: 18,
    ageMax: 99,
    locale: 'sv-SE'
  };