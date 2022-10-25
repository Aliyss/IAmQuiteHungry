export declare class SearchCustomFoods200ResponseCustomFoodsInner {
    'id': number;
    'title': string;
    'servings': number;
    'imageUrl': string;
    'price': number;
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
