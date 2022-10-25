export declare class SearchRecipesByNutrients200ResponseInner {
    'calories': number;
    'carbs': string;
    'fat': string;
    'id': number;
    'image': string;
    'imageType': string;
    'protein': string;
    'title': string;
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
