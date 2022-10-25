import { GetRecipeEquipmentByID200ResponseEquipmentInner } from './GetRecipeEquipmentByID200ResponseEquipmentInner';
export declare class GetRecipeEquipmentByID200Response {
    'equipment': Set<GetRecipeEquipmentByID200ResponseEquipmentInner>;
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
