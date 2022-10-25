import { SearchSiteContent200ResponseArticlesInner } from './SearchSiteContent200ResponseArticlesInner';
import { SearchSiteContent200ResponseGroceryProductsInner } from './SearchSiteContent200ResponseGroceryProductsInner';
export declare class SearchSiteContent200Response {
    'articles': Set<SearchSiteContent200ResponseArticlesInner>;
    'groceryProducts': Set<SearchSiteContent200ResponseGroceryProductsInner>;
    'menuItems': Set<SearchSiteContent200ResponseGroceryProductsInner>;
    'recipes': Set<SearchSiteContent200ResponseGroceryProductsInner>;
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
