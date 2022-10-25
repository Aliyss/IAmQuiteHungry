import { GetRecipeInformation200ResponseWinePairingProductMatchesInner } from './GetRecipeInformation200ResponseWinePairingProductMatchesInner';
export declare class GetRecipeInformation200ResponseWinePairing {
    'pairedWines': Array<string>;
    'pairingText': string;
    'productMatches': Set<GetRecipeInformation200ResponseWinePairingProductMatchesInner>;
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
