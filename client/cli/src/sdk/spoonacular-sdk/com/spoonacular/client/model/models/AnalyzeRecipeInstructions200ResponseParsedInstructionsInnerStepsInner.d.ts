import { AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner } from './AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner';
export declare class AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner {
    'number': number;
    'step': string;
    'ingredients'?: Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>;
    'equipment'?: Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>;
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
