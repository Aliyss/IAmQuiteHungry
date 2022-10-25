export declare class GenerateMealPlan200ResponseNutrients {
    'calories': number;
    'carbohydrates': number;
    'fat': number;
    'protein': number;
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
