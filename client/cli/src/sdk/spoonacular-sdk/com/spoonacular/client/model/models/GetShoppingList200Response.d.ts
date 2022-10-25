import { GetShoppingList200ResponseAislesInner } from './GetShoppingList200ResponseAislesInner';
export declare class GetShoppingList200Response {
    'aisles': Set<GetShoppingList200ResponseAislesInner>;
    'cost': number;
    'startDate': number;
    'endDate': number;
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
