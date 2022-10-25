import { GetRecipeIngredientsByID200ResponseIngredientsInner } from './GetRecipeIngredientsByID200ResponseIngredientsInner';
export declare class GetRecipeIngredientsByID200Response {
    'ingredients': Set<GetRecipeIngredientsByID200ResponseIngredientsInner>;
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
