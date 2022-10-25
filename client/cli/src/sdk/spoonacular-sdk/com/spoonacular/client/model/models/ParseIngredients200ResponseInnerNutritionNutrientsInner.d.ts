export declare class ParseIngredients200ResponseInnerNutritionNutrientsInner {
    'name': string;
    'amount': number;
    'unit': string;
    'percentOfDailyNeeds': number;
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
