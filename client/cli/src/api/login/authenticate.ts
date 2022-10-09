import superagent from "superagent";

export async function authenticate(loginUrl: string, username: string, password: string) {
	let headers: Record<string, string> = {
		'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": "en-US,en;q=0.9",
		"sec-fetch-dest": "document",
		"sec-fetch-mode": "navigate",
		"sec-fetch-site": "same-origin",
		'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
	}

	const siteResponse = await superagent
		.get(loginUrl)
		.send()
		.set(headers)

	let headerCookies: string[] = [];
	let csrf: string = "";

	siteResponse.headers['set-cookie'].forEach((value: string) => {
		if (value.split(";")[0]?.split("=")[0] === "CSRF") {
			csrf = value.split(";")[0]?.split("=")[1]
		}
		headerCookies.push(value.split(";")[0])
	})

	headers['cookie'] = headerCookies.join("; ")
	headers['content-type'] = 'application/x-www-form-urlencoded'

	const loginResponse = await superagent
		.post(loginUrl)
		.send({
			_csrf: csrf,
			username: username,
			password: password
		})
		.set(headers)

	console.log(JSON.stringify(loginResponse.body, null, 4))

}