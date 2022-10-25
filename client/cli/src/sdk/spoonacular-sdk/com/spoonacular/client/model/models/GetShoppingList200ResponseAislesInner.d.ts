import { GetShoppingList200ResponseAislesInnerItemsInner } from './GetShoppingList200ResponseAislesInnerItemsInner';
export declare class GetShoppingList200ResponseAislesInner {
    'aisle': string;
    'items'?: Set<GetShoppingList200ResponseAislesInnerItemsInner>;
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
