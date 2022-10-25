import { AnalyzeRecipeInstructions200ResponseIngredientsInner } from './AnalyzeRecipeInstructions200ResponseIngredientsInner';
import { AnalyzeRecipeInstructions200ResponseParsedInstructionsInner } from './AnalyzeRecipeInstructions200ResponseParsedInstructionsInner';
export declare class AnalyzeRecipeInstructions200Response {
    'parsedInstructions': Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInner>;
    'ingredients': Set<AnalyzeRecipeInstructions200ResponseIngredientsInner>;
    'equipment': Set<AnalyzeRecipeInstructions200ResponseIngredientsInner>;
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
