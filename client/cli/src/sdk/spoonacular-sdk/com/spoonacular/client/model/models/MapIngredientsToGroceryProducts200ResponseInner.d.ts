import { MapIngredientsToGroceryProducts200ResponseInnerProductsInner } from './MapIngredientsToGroceryProducts200ResponseInnerProductsInner';
export declare class MapIngredientsToGroceryProducts200ResponseInner {
    'original': string;
    'originalName': string;
    'ingredientImage': string;
    'meta': Array<string>;
    'products': Set<MapIngredientsToGroceryProducts200ResponseInnerProductsInner>;
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
