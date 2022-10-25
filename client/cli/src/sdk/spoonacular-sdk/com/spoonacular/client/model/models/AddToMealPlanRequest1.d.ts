import { AddToMealPlanRequest1Value } from './AddToMealPlanRequest1Value';
export declare class AddToMealPlanRequest1 {
    'date': number;
    'slot': number;
    'position': number;
    'type': string;
    'value': AddToMealPlanRequest1Value;
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
