import { GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric } from './GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric';
export declare class GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures {
    'metric': GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric;
    'us': GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric;
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
