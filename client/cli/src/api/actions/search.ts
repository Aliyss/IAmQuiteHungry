import superagent from "superagent";

export async function searchProduct(query: string, sortFields: string[] = ['normalizedUnit', 'effectiveUnitPrice'], sortOrder: string = 'asc') {
	let bodyRequest = {
		regionId: 'national',
		language: 'en',
		productIds: [],
		query: query,
		sortFields: sortFields,
		sortOrder: sortOrder,
		algorithm: 'DEFAULT',
		filters: {}
	}

	const request = await superagent
		.post("https://www.migros.ch/onesearch-oc-seaapi/public/v4/search")
		.send(bodyRequest)
		.set('accept', "application/json, text/plain, *!/!*")
		.set('content-type', "application/json")

	return request.body
}

export async function getProductCards(uids: string | string[], region: string = 'national') {

	if (Array.isArray(uids)) {
		uids = uids.join(",")
	}

	let request = await superagent
		.get(`https://www.migros.ch/product-display/public/v1/product-cards?uids=${uids}&storeType=OFFLINE&region=${region}`)
		.send() // sends a JSON post body
		.set('accept', "application/json, text/plain, *!/!*")

	return request.body
}

export async function getProductDetails(uids: string | string[], region: string = 'national') {

	if (Array.isArray(uids)) {
		uids = uids.join(",")
	}

	const request = await superagent
		.get(`https://www.migros.ch/product-display/public/v1/product-detail?storeType=OFFLINE&region=${region}&uids=${uids}`)
		.send()
		.set('accept', "application/json, text/plain, *!/!*")

	return request.body
}