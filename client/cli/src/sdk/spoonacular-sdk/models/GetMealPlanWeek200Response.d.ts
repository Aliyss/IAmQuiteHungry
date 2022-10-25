import { GetMealPlanWeek200ResponseDaysInner } from './GetMealPlanWeek200ResponseDaysInner';
export declare class GetMealPlanWeek200Response {
    'days': Set<GetMealPlanWeek200ResponseDaysInner>;
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
