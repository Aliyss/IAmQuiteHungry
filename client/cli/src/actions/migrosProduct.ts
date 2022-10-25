import { MigrosAPI } from "migros-api-wrapper";

export const migrosProductSearch = async (productSearchString: string) => {
	try {
		return await MigrosAPI.products.productSearch.searchProduct({
			query: productSearchString
		})
	} catch (e) {
		console.log(e)
	}
	return []
}

export const migrosProductDetails = async (uids: string | string[]) => {
	try {
		return await MigrosAPI.products.productDisplay.getProductDetails({
			uids: uids
		})
	} catch (e) {
		console.log(e)
	}
	return []
}

export const migrosProductCards = async (uids: string | string[]) => {
	try {
		return await MigrosAPI.products.productDisplay.getProductCards({
			uids: uids
		})
	} catch (e) {
		console.log(e)
	}
	return []
}