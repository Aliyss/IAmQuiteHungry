export declare class GetRecipeNutritionWidgetByID200ResponseBadInner {
    'name': string;
    'amount': string;
    'indented': boolean;
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
