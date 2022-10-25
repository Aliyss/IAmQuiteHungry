export declare class GetRecipeTasteByID200Response {
    'sweetness': number;
    'saltiness': number;
    'sourness': number;
    'bitterness': number;
    'savoriness': number;
    'fattiness': number;
    'spiciness': number;
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
