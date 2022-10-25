import { AutocompleteProductSearch200ResponseResultsInner } from './AutocompleteProductSearch200ResponseResultsInner';
export declare class AutocompleteMenuItemSearch200Response {
    'results': Set<AutocompleteProductSearch200ResponseResultsInner>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
