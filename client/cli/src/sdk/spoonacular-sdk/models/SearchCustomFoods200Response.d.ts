import { SearchCustomFoods200ResponseCustomFoodsInner } from './SearchCustomFoods200ResponseCustomFoodsInner';
export declare class SearchCustomFoods200Response {
    'customFoods': Set<SearchCustomFoods200ResponseCustomFoodsInner>;
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
