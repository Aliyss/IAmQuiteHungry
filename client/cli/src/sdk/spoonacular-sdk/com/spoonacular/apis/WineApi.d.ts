import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { GetDishPairingForWine200Response } from '..com/spoonacular/client/model/models/GetDishPairingForWine200Response';
import { GetWineDescription200Response } from '..com/spoonacular/client/model/models/GetWineDescription200Response';
import { GetWinePairing200Response } from '..com/spoonacular/client/model/models/GetWinePairing200Response';
import { GetWineRecommendation200Response } from '..com/spoonacular/client/model/models/GetWineRecommendation200Response';
export declare class WineApiRequestFactory extends BaseAPIRequestFactory {
    getDishPairingForWine(wine: string, _options?: Configuration): Promise<RequestContext>;
    getWineDescription(wine: string, _options?: Configuration): Promise<RequestContext>;
    getWinePairing(food: string, maxPrice?: number, _options?: Configuration): Promise<RequestContext>;
    getWineRecommendation(wine: string, maxPrice?: number, minRating?: number, number?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class WineApiResponseProcessor {
    getDishPairingForWine(response: ResponseContext): Promise<GetDishPairingForWine200Response>;
    getWineDescription(response: ResponseContext): Promise<GetWineDescription200Response>;
    getWinePairing(response: ResponseContext): Promise<GetWinePairing200Response>;
    getWineRecommendation(response: ResponseContext): Promise<GetWineRecommendation200Response>;
}
