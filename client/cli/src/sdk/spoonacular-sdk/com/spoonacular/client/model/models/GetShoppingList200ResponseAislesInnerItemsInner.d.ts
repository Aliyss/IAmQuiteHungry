import { GetShoppingList200ResponseAislesInnerItemsInnerMeasures } from './GetShoppingList200ResponseAislesInnerItemsInnerMeasures';
export declare class GetShoppingList200ResponseAislesInnerItemsInner {
    'id': number;
    'name': string;
    'measures'?: GetShoppingList200ResponseAislesInnerItemsInnerMeasures;
    'pantryItem': boolean;
    'aisle': string;
    'cost': number;
    'ingredientId': number;
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
