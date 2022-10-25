import { GetWinePairing200ResponseProductMatchesInner } from './GetWinePairing200ResponseProductMatchesInner';
export declare class GetWinePairing200Response {
    'pairedWines': Array<string>;
    'pairingText': string;
    'productMatches': Set<GetWinePairing200ResponseProductMatchesInner>;
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
