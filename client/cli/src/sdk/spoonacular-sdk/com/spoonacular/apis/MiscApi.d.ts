import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { DetectFoodInText200Response } from '..com/spoonacular/client/model/models/DetectFoodInText200Response';
import { GetARandomFoodJoke200Response } from '..com/spoonacular/client/model/models/GetARandomFoodJoke200Response';
import { GetConversationSuggests200Response } from '..com/spoonacular/client/model/models/GetConversationSuggests200Response';
import { GetRandomFoodTrivia200Response } from '..com/spoonacular/client/model/models/GetRandomFoodTrivia200Response';
import { ImageAnalysisByURL200Response } from '..com/spoonacular/client/model/models/ImageAnalysisByURL200Response';
import { ImageClassificationByURL200Response } from '..com/spoonacular/client/model/models/ImageClassificationByURL200Response';
import { SearchAllFood200Response } from '..com/spoonacular/client/model/models/SearchAllFood200Response';
import { SearchCustomFoods200Response } from '..com/spoonacular/client/model/models/SearchCustomFoods200Response';
import { SearchFoodVideos200Response } from '..com/spoonacular/client/model/models/SearchFoodVideos200Response';
import { SearchSiteContent200Response } from '..com/spoonacular/client/model/models/SearchSiteContent200Response';
import { TalkToChatbot200Response } from '..com/spoonacular/client/model/models/TalkToChatbot200Response';
export declare class MiscApiRequestFactory extends BaseAPIRequestFactory {
    detectFoodInText(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', _options?: Configuration): Promise<RequestContext>;
    getARandomFoodJoke(_options?: Configuration): Promise<RequestContext>;
    getConversationSuggests(query: string, number?: number, _options?: Configuration): Promise<RequestContext>;
    getRandomFoodTrivia(_options?: Configuration): Promise<RequestContext>;
    imageAnalysisByURL(imageUrl: string, _options?: Configuration): Promise<RequestContext>;
    imageClassificationByURL(imageUrl: string, _options?: Configuration): Promise<RequestContext>;
    searchAllFood(query: string, offset?: number, number?: number, _options?: Configuration): Promise<RequestContext>;
    searchCustomFoods(username: string, hash: string, query?: string, offset?: number, number?: number, _options?: Configuration): Promise<RequestContext>;
    searchFoodVideos(query?: string, type?: string, cuisine?: string, diet?: string, includeIngredients?: string, excludeIngredients?: string, minLength?: number, maxLength?: number, offset?: number, number?: number, _options?: Configuration): Promise<RequestContext>;
    searchSiteContent(query: string, _options?: Configuration): Promise<RequestContext>;
    talkToChatbot(text: string, contextId?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class MiscApiResponseProcessor {
    detectFoodInText(response: ResponseContext): Promise<DetectFoodInText200Response>;
    getARandomFoodJoke(response: ResponseContext): Promise<GetARandomFoodJoke200Response>;
    getConversationSuggests(response: ResponseContext): Promise<GetConversationSuggests200Response>;
    getRandomFoodTrivia(response: ResponseContext): Promise<GetRandomFoodTrivia200Response>;
    imageAnalysisByURL(response: ResponseContext): Promise<ImageAnalysisByURL200Response>;
    imageClassificationByURL(response: ResponseContext): Promise<ImageClassificationByURL200Response>;
    searchAllFood(response: ResponseContext): Promise<SearchAllFood200Response>;
    searchCustomFoods(response: ResponseContext): Promise<SearchCustomFoods200Response>;
    searchFoodVideos(response: ResponseContext): Promise<SearchFoodVideos200Response>;
    searchSiteContent(response: ResponseContext): Promise<SearchSiteContent200Response>;
    talkToChatbot(response: ResponseContext): Promise<TalkToChatbot200Response>;
}
