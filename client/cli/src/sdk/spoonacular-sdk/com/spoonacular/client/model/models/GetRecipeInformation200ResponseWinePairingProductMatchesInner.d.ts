export declare class GetRecipeInformation200ResponseWinePairingProductMatchesInner {
    'id': number;
    'title': string;
    'description': string;
    'price': string;
    'imageUrl': string;
    'averageRating': number;
    'ratingCount': number;
    'score': number;
    'link': string;
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
