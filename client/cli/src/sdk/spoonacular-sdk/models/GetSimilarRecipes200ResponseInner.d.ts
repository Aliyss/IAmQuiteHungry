export declare class GetSimilarRecipes200ResponseInner {
    'id': number;
    'title': string;
    'imageType': string;
    'readyInMinutes': number;
    'servings': number;
    'sourceUrl': string;
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
