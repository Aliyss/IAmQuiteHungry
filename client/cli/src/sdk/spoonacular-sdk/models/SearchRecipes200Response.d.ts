import { SearchRecipes200ResponseResultsInner } from './SearchRecipes200ResponseResultsInner';
export declare class SearchRecipes200Response {
    'offset': number;
    'number': number;
    'results': Set<SearchRecipes200ResponseResultsInner>;
    'totalResults': number;
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
