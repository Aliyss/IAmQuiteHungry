import { SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner } from './SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner';
export declare class SearchSiteContent200ResponseGroceryProductsInner {
    'dataPoints'?: Set<SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner>;
    'image': string;
    'link': string;
    'name': string;
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
