import { AutocompleteRecipeSearch200ResponseInner } from './AutocompleteRecipeSearch200ResponseInner';
export declare class SearchGroceryProducts200Response {
    'products': Set<AutocompleteRecipeSearch200ResponseInner>;
    'totalProducts': number;
    'type': string;
    'offset': number;
    'number': number;
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
