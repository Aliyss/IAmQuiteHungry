import { GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue } from './GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue';
export declare class GetMealPlanTemplate200ResponseDaysInnerItemsInner {
    'id': number;
    'slot': number;
    'position': number;
    'type': string;
    'value'?: GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue;
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
