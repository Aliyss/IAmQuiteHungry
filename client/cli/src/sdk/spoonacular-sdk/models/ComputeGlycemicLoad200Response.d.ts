import { ComputeGlycemicLoad200ResponseIngredientsInner } from './ComputeGlycemicLoad200ResponseIngredientsInner';
export declare class ComputeGlycemicLoad200Response {
    'totalGlycemicLoad': number;
    'ingredients': Set<ComputeGlycemicLoad200ResponseIngredientsInner>;
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
