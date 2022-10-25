import { GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric } from './GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric';
export declare class GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount {
    'metric': GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric;
    'us': GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric;
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
