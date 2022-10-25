import { AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner } from './AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner';
export declare class AnalyzeRecipeInstructions200ResponseParsedInstructionsInner {
    'name': string;
    'steps'?: Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner>;
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
