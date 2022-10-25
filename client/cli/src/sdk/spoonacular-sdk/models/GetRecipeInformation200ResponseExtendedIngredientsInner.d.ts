import { GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures } from './GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures';
export declare class GetRecipeInformation200ResponseExtendedIngredientsInner {
    'aisle': string;
    'amount': number;
    'consitency': string;
    'id': number;
    'image': string;
    'measures'?: GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures;
    'meta'?: Array<string>;
    'name': string;
    'original': string;
    'originalName': string;
    'unit': string;
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
