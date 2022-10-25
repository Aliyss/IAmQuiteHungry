import { GetRandomRecipes200ResponseRecipesInner } from './GetRandomRecipes200ResponseRecipesInner';
export declare class GetRandomRecipes200Response {
    'recipes': Set<GetRandomRecipes200ResponseRecipesInner>;
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
