import { SearchFoodVideos200ResponseVideosInner } from './SearchFoodVideos200ResponseVideosInner';
export declare class SearchFoodVideos200Response {
    'videos': Set<SearchFoodVideos200ResponseVideosInner>;
    'totalResults': number;
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
