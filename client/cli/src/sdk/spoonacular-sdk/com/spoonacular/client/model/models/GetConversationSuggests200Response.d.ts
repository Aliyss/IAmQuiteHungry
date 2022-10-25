import { GetConversationSuggests200ResponseSuggests } from './GetConversationSuggests200ResponseSuggests';
export declare class GetConversationSuggests200Response {
    'suggests': GetConversationSuggests200ResponseSuggests;
    'words': Array<any>;
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
