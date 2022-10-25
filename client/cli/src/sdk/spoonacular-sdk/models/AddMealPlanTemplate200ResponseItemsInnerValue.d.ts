export declare class AddMealPlanTemplate200ResponseItemsInnerValue {
    'id'?: number;
    'servings'?: number;
    'title'?: string;
    'imageType'?: string;
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
