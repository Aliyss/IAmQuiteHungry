export declare class GetWineRecommendation200ResponseRecommendedWinesInner {
    'id': number;
    'title': string;
    'averageRating': number;
    'description': string;
    'imageUrl': string;
    'link': string;
    'price': string;
    'ratingCount': number;
    'score': number;
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
