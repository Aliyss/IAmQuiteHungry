import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AddMealPlanTemplate200Response } from '..com/spoonacular/client/model/models/AddMealPlanTemplate200Response';
import { AddToMealPlanRequest } from '..com/spoonacular/client/model/models/AddToMealPlanRequest';
import { ClearMealPlanDayRequest } from '..com/spoonacular/client/model/models/ClearMealPlanDayRequest';
import { ConnectUser200Response } from '..com/spoonacular/client/model/models/ConnectUser200Response';
import { DeleteFromMealPlanRequest } from '..com/spoonacular/client/model/models/DeleteFromMealPlanRequest';
import { GenerateMealPlan200Response } from '..com/spoonacular/client/model/models/GenerateMealPlan200Response';
import { GenerateShoppingList200Response } from '..com/spoonacular/client/model/models/GenerateShoppingList200Response';
import { GenerateShoppingListRequest } from '..com/spoonacular/client/model/models/GenerateShoppingListRequest';
import { GetMealPlanTemplate200Response } from '..com/spoonacular/client/model/models/GetMealPlanTemplate200Response';
import { GetMealPlanTemplates200Response } from '..com/spoonacular/client/model/models/GetMealPlanTemplates200Response';
import { GetMealPlanWeek200Response } from '..com/spoonacular/client/model/models/GetMealPlanWeek200Response';
import { GetShoppingList200Response } from '..com/spoonacular/client/model/models/GetShoppingList200Response';
export declare class MealPlanningApiRequestFactory extends BaseAPIRequestFactory {
    addMealPlanTemplate(username: string, hash: string, addToMealPlanRequest: AddToMealPlanRequest, _options?: Configuration): Promise<RequestContext>;
    addToMealPlan(username: string, hash: string, addToMealPlanRequest: AddToMealPlanRequest, _options?: Configuration): Promise<RequestContext>;
    addToShoppingList(username: string, hash: string, addToMealPlanRequest: AddToMealPlanRequest, _options?: Configuration): Promise<RequestContext>;
    clearMealPlanDay(username: string, date: string, hash: string, clearMealPlanDayRequest: ClearMealPlanDayRequest, _options?: Configuration): Promise<RequestContext>;
    connectUser(body: any, _options?: Configuration): Promise<RequestContext>;
    deleteFromMealPlan(username: string, id: number, hash: string, deleteFromMealPlanRequest: DeleteFromMealPlanRequest, _options?: Configuration): Promise<RequestContext>;
    deleteFromShoppingList(username: string, id: number, hash: string, deleteFromMealPlanRequest: DeleteFromMealPlanRequest, _options?: Configuration): Promise<RequestContext>;
    deleteMealPlanTemplate(username: string, id: number, hash: string, deleteFromMealPlanRequest: DeleteFromMealPlanRequest, _options?: Configuration): Promise<RequestContext>;
    generateMealPlan(timeFrame?: string, targetCalories?: number, diet?: string, exclude?: string, _options?: Configuration): Promise<RequestContext>;
    generateShoppingList(username: string, startDate: string, endDate: string, hash: string, generateShoppingListRequest: GenerateShoppingListRequest, _options?: Configuration): Promise<RequestContext>;
    getMealPlanTemplate(username: string, id: number, hash: string, _options?: Configuration): Promise<RequestContext>;
    getMealPlanTemplates(username: string, hash: string, _options?: Configuration): Promise<RequestContext>;
    getMealPlanWeek(username: string, startDate: string, hash: string, _options?: Configuration): Promise<RequestContext>;
    getShoppingList(username: string, hash: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class MealPlanningApiResponseProcessor {
    addMealPlanTemplate(response: ResponseContext): Promise<AddMealPlanTemplate200Response>;
    addToMealPlan(response: ResponseContext): Promise<any>;
    addToShoppingList(response: ResponseContext): Promise<GenerateShoppingList200Response>;
    clearMealPlanDay(response: ResponseContext): Promise<any>;
    connectUser(response: ResponseContext): Promise<ConnectUser200Response>;
    deleteFromMealPlan(response: ResponseContext): Promise<any>;
    deleteFromShoppingList(response: ResponseContext): Promise<any>;
    deleteMealPlanTemplate(response: ResponseContext): Promise<any>;
    generateMealPlan(response: ResponseContext): Promise<GenerateMealPlan200Response>;
    generateShoppingList(response: ResponseContext): Promise<GenerateShoppingList200Response>;
    getMealPlanTemplate(response: ResponseContext): Promise<GetMealPlanTemplate200Response>;
    getMealPlanTemplates(response: ResponseContext): Promise<GetMealPlanTemplates200Response>;
    getMealPlanWeek(response: ResponseContext): Promise<GetMealPlanWeek200Response>;
    getShoppingList(response: ResponseContext): Promise<GetShoppingList200Response>;
}
