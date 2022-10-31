export interface IChoice {
	name: string
	message: string,
	auth: string,
	anti_auth?: string
}

export const choices: { [any: string]: IChoice[] } = {
	start: [
		{
			name: 'iaqh_details',
			message: 'IAQH: Details',
			auth: 'login_complete'
		},
		{
			name: 'migros_account_login',
			message: 'Migros: Login to your Account',
			auth: 'none',
			anti_auth: 'login_cookies'
		},
		{
			name: 'migros_account_details',
			message: 'Migros: Account Details',
			auth: 'login_cookies'
		},
		{
			name: 'cumulus_account_login',
			message: 'Cumulus: Login to your Account',
			auth: 'login_cookies',
			anti_auth: 'cumulus_cookies'
		},
		{
			name: 'cumulus_account_details',
			message: 'Cumulus: Account Details',
			auth: 'cumulus_cookies'
		},
		{
			name: 'bring_account_login',
			message: 'Bring: Login to your Account',
			auth: 'none',
			anti_auth: 'bring_login'
		},
		{
			name: 'bring_account_details',
			message: 'Bring: Account Details',
			auth: 'bring_login'
		},
		{
			name: 'spoonacular_account_login',
			message: 'Spoonacular: Login to your Account',
			auth: 'none',
			anti_auth: 'spoonacular_login'
		},
		{
			name: 'spoonacular_account_details',
			message: 'Spoonacular: Account Details',
			auth: 'spoonacular_login'
		},
		{
			name: 'product_details',
			message: 'Products: Product Details',
			auth: 'none'
		}
	],
	iaqh_details: [
		{
			name: 'iaqh_details-search_recipes',
			message: 'Search for useful recipes',
			auth: 'login_complete'
		}
	],
	migros_account_details: [
		{
			name: 'migros_account_details-security_options',
			message: 'Get security options',
			auth: 'login_cookies'
		},
		{
			name: 'migros_account_details-cumulus_stats',
			message: 'Get Cumulus Stats',
			auth: 'login_cookies'
		}
	],
	cumulus_account_details: [
		{
			name: 'cumulus_account_details-cumulus_receipts',
			message: 'Get Cumulus Receipts',
			auth: 'cumulus_cookies'
		}
	],
	bring_account_details: [
		{
			name: 'bring_account_details-shopping_lists',
			message: 'Get Bring Shopping Lists',
			auth: 'bring_login'
		},
		{
			name: 'bring_account_details-upload_file',
			message: 'Upload Bring Item File',
			auth: 'bring_login'
		}
	],
	spoonacular_account_details: [
		{
			name: 'spoonacular_account_details-random_recipes',
			message: 'Get Spoonacular Random Recipes',
			auth: 'spoonacular_login'
		},
		{
			name: 'spoonacular_account_details-search_recipes',
			message: 'Get Spoonacular Search Random Recipes',
			auth: 'spoonacular_login'
		}
	],
	product_details: [
		{
			name: 'product_details-product_search',
			message: 'Search for Product',
			auth: 'none'
		}
	],
	product_search: [
		{
			name: 'product_search-product_card',
			message: 'Get Product Card',
			auth: 'none'
		},
		{
			name: 'product_search-product_detail',
			message: 'Get Product Detail',
			auth: 'none'
		}
	],
	['*']: [
		{
			name: '*-return',
			message: 'Return',
			auth: 'none'
		},
		{
			name: '*-exit',
			message: 'Exit',
			auth: 'none'
		},
	]
}