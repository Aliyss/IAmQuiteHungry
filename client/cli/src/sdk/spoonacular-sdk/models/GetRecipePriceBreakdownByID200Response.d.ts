import { GetRecipePriceBreakdownByID200ResponseIngredientsInner } from './GetRecipePriceBreakdownByID200ResponseIngredientsInner';
export declare class GetRecipePriceBreakdownByID200Response {
    'ingredients': Set<GetRecipePriceBreakdownByID200ResponseIngredientsInner>;
    'totalCost': number;
    'totalCostPerServing': number;
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
