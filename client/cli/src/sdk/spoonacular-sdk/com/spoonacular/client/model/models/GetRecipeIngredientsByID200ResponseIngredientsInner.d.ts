import { GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount } from './GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount';
export declare class GetRecipeIngredientsByID200ResponseIngredientsInner {
    'amount'?: GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount;
    'image': string;
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
