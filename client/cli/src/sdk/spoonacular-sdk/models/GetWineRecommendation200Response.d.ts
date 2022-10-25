import { GetWineRecommendation200ResponseRecommendedWinesInner } from './GetWineRecommendation200ResponseRecommendedWinesInner';
export declare class GetWineRecommendation200Response {
    'recommendedWines': Set<GetWineRecommendation200ResponseRecommendedWinesInner>;
    'totalFound': number;
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
