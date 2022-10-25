import { AddMealPlanTemplate200ResponseItemsInnerValue } from './AddMealPlanTemplate200ResponseItemsInnerValue';
export declare class AddMealPlanTemplate200ResponseItemsInner {
    'day': number;
    'slot': number;
    'position': number;
    'type': string;
    'value'?: AddMealPlanTemplate200ResponseItemsInnerValue;
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
