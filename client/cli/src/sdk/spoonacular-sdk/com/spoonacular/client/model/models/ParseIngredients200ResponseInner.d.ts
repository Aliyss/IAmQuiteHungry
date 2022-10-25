import { ParseIngredients200ResponseInnerEstimatedCost } from './ParseIngredients200ResponseInnerEstimatedCost';
import { ParseIngredients200ResponseInnerNutrition } from './ParseIngredients200ResponseInnerNutrition';
export declare class ParseIngredients200ResponseInner {
    'id': number;
    'original': string;
    'originalName': string;
    'name': string;
    'nameClean': string;
    'amount': number;
    'unit': string;
    'unitShort': string;
    'unitLong': string;
    'possibleUnits': Array<string>;
    'estimatedCost': ParseIngredients200ResponseInnerEstimatedCost;
    'consistency': string;
    'aisle': string;
    'image': string;
    'meta': Array<string>;
    'nutrition': ParseIngredients200ResponseInnerNutrition;
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
