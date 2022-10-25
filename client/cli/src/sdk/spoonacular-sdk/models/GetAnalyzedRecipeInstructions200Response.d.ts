import { GetAnalyzedRecipeInstructions200ResponseIngredientsInner } from './GetAnalyzedRecipeInstructions200ResponseIngredientsInner';
import { GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner } from './GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner';
export declare class GetAnalyzedRecipeInstructions200Response {
    'parsedInstructions': Set<GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner>;
    'ingredients': Set<GetAnalyzedRecipeInstructions200ResponseIngredientsInner>;
    'equipment': Set<GetAnalyzedRecipeInstructions200ResponseIngredientsInner>;
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
