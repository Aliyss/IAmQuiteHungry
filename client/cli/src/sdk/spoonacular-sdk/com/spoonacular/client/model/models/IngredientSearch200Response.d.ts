import { IngredientSearch200ResponseResultsInner } from './IngredientSearch200ResponseResultsInner';
export declare class IngredientSearch200Response {
    'results': Set<IngredientSearch200ResponseResultsInner>;
    'offset': number;
    'number': number;
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
