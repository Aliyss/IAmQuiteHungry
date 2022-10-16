// NPM Modules
// @ts-ignore
import { Input } from "enquirer";

// Prompts
import { createSelectPrompt } from "./actionPrompt";

export async function createProductSearchPrompt(initial: string = ""): Promise<string> {

	const prompt = new Input({
		message: 'What product are you searching?',
		initial: initial
	});

	return prompt.run();
}

const sortByMostEffectivePrice = (a: any, b: any) => {
	if (!a.price || !b.price) {
		return 0
	}
	if (!a.price.unitPrice || !b.price.unitPrice) {
		return a.price.value - b.price.value
	}
	return a.price.unitPrice.value - b.price.unitPrice.value
}

const createMessageFromProduct = (product: any) => {
	return `${product.brand || 'Migros'} ${product.name} (${product.quantity || product.noPriceReason})` + (product.price && product.price.value ? ` | ${product.price.value || product.noPriceReason} CHF` : '') + (product.price && product.price.unitPrice ? ` (${product.price.unitPrice.value} CHF pro ${product.price.unitPrice.unit})` : '')
}

export async function createProductSelectPrompt(products: any[], sortBy: (a: any, b: any) => number = sortByMostEffectivePrice): Promise<string> {
	return createSelectPrompt(
		'product',
		'Select a Product',
		products.sort(sortBy).map(product => {
			return {
				name: product.id,
				value: product,
				message: createMessageFromProduct(product)
			}
		})
	);
}
