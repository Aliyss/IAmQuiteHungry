import { DetectFoodInText200ResponseAnnotationsInner } from './DetectFoodInText200ResponseAnnotationsInner';
export declare class DetectFoodInText200Response {
    'annotations': Set<DetectFoodInText200ResponseAnnotationsInner>;
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
