import { createSelectPrompt } from "../../actionPrompt";

const sortByDate = (a: any, b: any) => {
	return b.date - a.date
}

const createMessageFromReceipt = (receipt: any) => {
	return `${receipt.date.toLocaleDateString({ weekday:"long", year:"numeric", month:"short"})} (${receipt.total.value} ${receipt.total.currency}) - ${receipt.outlet || 'Migros'}`
}

export async function createReceiptSelectPrompt(receipts: any[], sortBy: (a: any, b: any) => number = sortByDate): Promise<string> {
	return createSelectPrompt(
		'receipts',
		'Select a Receipt',
		receipts.sort(sortBy).map(receipt => {
			return {
				name: receipt.id,
				value: receipt,
				message: createMessageFromReceipt(receipt)
			}
		})
	);
}
