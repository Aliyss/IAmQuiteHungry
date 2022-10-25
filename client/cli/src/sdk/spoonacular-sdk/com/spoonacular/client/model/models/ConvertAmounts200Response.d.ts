export declare class ConvertAmounts200Response {
    'sourceAmount': number;
    'sourceUnit': string;
    'targetAmount': number;
    'targetUnit': string;
    'answer': string;
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
