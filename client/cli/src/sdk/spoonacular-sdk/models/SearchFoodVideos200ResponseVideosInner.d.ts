export declare class SearchFoodVideos200ResponseVideosInner {
    'title': string;
    'length': number;
    'rating': number;
    'shortTitle': string;
    'thumbnail': string;
    'views': number;
    'youTubeId': string;
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
