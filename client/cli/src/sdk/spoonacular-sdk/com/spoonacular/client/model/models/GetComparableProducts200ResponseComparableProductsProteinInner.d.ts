export declare class GetComparableProducts200ResponseComparableProductsProteinInner {
    'difference': number;
    'id': number;
    'image': string;
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
