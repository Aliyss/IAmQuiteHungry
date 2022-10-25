import { GetComparableProducts200ResponseComparableProducts } from './GetComparableProducts200ResponseComparableProducts';
export declare class GetComparableProducts200Response {
    'comparableProducts': GetComparableProducts200ResponseComparableProducts;
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
