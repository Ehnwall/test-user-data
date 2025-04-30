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
};
export declare const DEFAULT_OPTIONS: UserGenerationOptions;
