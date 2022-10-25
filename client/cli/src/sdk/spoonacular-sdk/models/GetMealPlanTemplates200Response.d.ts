import { GetAnalyzedRecipeInstructions200ResponseIngredientsInner } from './GetAnalyzedRecipeInstructions200ResponseIngredientsInner';
export declare class GetMealPlanTemplates200Response {
    'templates': Set<GetAnalyzedRecipeInstructions200ResponseIngredientsInner>;
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
