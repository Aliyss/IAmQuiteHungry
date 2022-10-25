import { ICookies } from "migros-api-wrapper/dist/api/interfaces/cookies";

export const combineCookies = (cookies1: ICookies, cookies2: ICookies): ICookies => {
	for (let i = 0; i < Object.keys(cookies2).length; i++) {
		if (!Object.prototype.hasOwnProperty.call(cookies1, Object.keys(cookies2)[i])) {
			continue;
		}
		cookies1[Object.keys(cookies2)[i]] = cookies2[Object.keys(cookies1)[i]]
	}
	return cookies1
}