export declare class SearchAllFood200ResponseSearchResultsInnerResultsInner {
    'id': string;
    'name': string;
    'image': string;
    'link': string;
    'type': string;
    'relevance': number;
    'content': string;
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
