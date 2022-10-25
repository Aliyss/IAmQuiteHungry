import { GetIngredientInformation200ResponseNutrition } from './GetIngredientInformation200ResponseNutrition';
import { ParseIngredients200ResponseInnerEstimatedCost } from './ParseIngredients200ResponseInnerEstimatedCost';
export declare class GetIngredientInformation200Response {
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
    'shoppingListUnits': Array<string>;
    'aisle': string;
    'image': string;
    'meta': Array<any>;
    'nutrition': GetIngredientInformation200ResponseNutrition;
    'categoryPath': Array<string>;
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
