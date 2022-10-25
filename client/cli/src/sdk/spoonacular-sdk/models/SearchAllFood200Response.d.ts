import { SearchAllFood200ResponseSearchResultsInner } from './SearchAllFood200ResponseSearchResultsInner';
export declare class SearchAllFood200Response {
    'query': string;
    'totalResults': number;
    'limit': number;
    'offset': number;
    'searchResults': Set<SearchAllFood200ResponseSearchResultsInner>;
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
