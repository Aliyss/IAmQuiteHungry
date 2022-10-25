export declare class GetWinePairing200ResponseProductMatchesInner {
    'id': number;
    'title': string;
    'averageRating': number;
    'description'?: any;
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
