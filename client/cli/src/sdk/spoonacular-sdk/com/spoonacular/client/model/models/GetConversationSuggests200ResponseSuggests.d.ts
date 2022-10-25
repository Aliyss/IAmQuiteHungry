import { GetConversationSuggests200ResponseSuggestsInner } from './GetConversationSuggests200ResponseSuggestsInner';
export declare class GetConversationSuggests200ResponseSuggests {
    'u': Set<GetConversationSuggests200ResponseSuggestsInner>;
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
