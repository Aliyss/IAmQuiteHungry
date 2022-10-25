export declare class ComputeGlycemicLoad200ResponseIngredientsInner {
    'id': number;
    'original': string;
    'glycemicIndex': number;
    'glycemicLoad': number;
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
