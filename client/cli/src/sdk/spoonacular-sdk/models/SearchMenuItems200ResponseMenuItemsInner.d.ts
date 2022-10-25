import { SearchGroceryProductsByUPC200ResponseServings } from './SearchGroceryProductsByUPC200ResponseServings';
export declare class SearchMenuItems200ResponseMenuItemsInner {
    'id': number;
    'title': string;
    'restaurantChain': string;
    'image': string;
    'imageType': string;
    'servings'?: SearchGroceryProductsByUPC200ResponseServings;
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
