import { GetMealPlanWeek200ResponseDaysInnerItemsInnerValue } from './GetMealPlanWeek200ResponseDaysInnerItemsInnerValue';
export declare class GetMealPlanWeek200ResponseDaysInnerItemsInner {
    'id': number;
    'slot': number;
    'position': number;
    'type': string;
    'value'?: GetMealPlanWeek200ResponseDaysInnerItemsInnerValue;
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
