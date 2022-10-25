import { SearchMenuItems200ResponseMenuItemsInner } from './SearchMenuItems200ResponseMenuItemsInner';
export declare class SearchMenuItems200Response {
    'menuItems': Set<SearchMenuItems200ResponseMenuItemsInner>;
    'totalMenuItems': number;
    'type': string;
    'offset': number;
    'number': number;
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
