import { SearchAllFood200ResponseSearchResultsInnerResultsInner } from './SearchAllFood200ResponseSearchResultsInnerResultsInner';
export declare class SearchAllFood200ResponseSearchResultsInner {
    'name': string;
    'totalResults': number;
    'results'?: Set<SearchAllFood200ResponseSearchResultsInnerResultsInner>;
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
