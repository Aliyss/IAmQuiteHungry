import { GetComparableProducts200ResponseComparableProductsProteinInner } from './GetComparableProducts200ResponseComparableProductsProteinInner';
export declare class GetComparableProducts200ResponseComparableProducts {
    'calories': Array<any>;
    'likes': Array<any>;
    'price': Array<any>;
    'protein': Set<GetComparableProducts200ResponseComparableProductsProteinInner>;
    'spoonacularScore': Set<GetComparableProducts200ResponseComparableProductsProteinInner>;
    'sugar': Array<any>;
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
