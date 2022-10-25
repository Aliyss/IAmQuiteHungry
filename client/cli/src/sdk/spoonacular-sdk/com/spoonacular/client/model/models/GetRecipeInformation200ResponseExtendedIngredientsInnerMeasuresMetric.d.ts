export declare class GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric {
    'amount': number;
    'unitLong': string;
    'unitShort': string;
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
