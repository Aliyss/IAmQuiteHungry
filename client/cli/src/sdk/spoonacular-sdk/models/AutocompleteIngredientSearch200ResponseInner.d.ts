export declare class AutocompleteIngredientSearch200ResponseInner {
    'name': string;
    'image': string;
    'id'?: number;
    'aisle'?: string;
    'possibleUnits'?: Array<string>;
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
