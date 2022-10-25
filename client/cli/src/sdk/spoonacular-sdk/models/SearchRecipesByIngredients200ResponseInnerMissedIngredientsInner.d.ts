export declare class SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner {
    'aisle': string;
    'amount': number;
    'id': number;
    'image': string;
    'meta'?: Array<string>;
    'name': string;
    'original': string;
    'originalName': string;
    'unit': string;
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
