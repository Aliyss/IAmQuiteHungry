export declare class ClassifyGroceryProduct200Response {
    'cleanTitle': string;
    'image': string;
    'category': string;
    'breadcrumbs': Array<string>;
    'usdaCode': number;
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
