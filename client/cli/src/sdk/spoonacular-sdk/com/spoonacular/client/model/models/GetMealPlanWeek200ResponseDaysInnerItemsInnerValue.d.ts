export declare class GetMealPlanWeek200ResponseDaysInnerItemsInnerValue {
    'servings': number;
    'id': number;
    'title': string;
    'imageType': string;
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
