import { AddToMealPlanRequest1ValueIngredientsInner } from './AddToMealPlanRequest1ValueIngredientsInner';
export declare class AddToMealPlanRequest1Value {
    'ingredients': Set<AddToMealPlanRequest1ValueIngredientsInner>;
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
