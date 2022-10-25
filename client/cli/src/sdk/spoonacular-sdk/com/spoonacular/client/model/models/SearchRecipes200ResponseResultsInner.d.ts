export declare class SearchRecipes200ResponseResultsInner {
    'id': number;
    'title': string;
    'calories': number;
    'carbs': string;
    'fat': string;
    'image': string;
    'imageType': string;
    'protein': string;
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
