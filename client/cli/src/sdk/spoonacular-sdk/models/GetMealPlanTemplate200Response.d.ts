import { GetMealPlanTemplate200ResponseDaysInner } from './GetMealPlanTemplate200ResponseDaysInner';
export declare class GetMealPlanTemplate200Response {
    'id': number;
    'name': string;
    'days': Set<GetMealPlanTemplate200ResponseDaysInner>;
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
