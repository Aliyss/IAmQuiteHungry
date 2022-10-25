import { GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner } from './GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner';
export declare class GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner {
    'name': string;
    'steps'?: Set<GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner>;
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
