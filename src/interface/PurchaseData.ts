import product from "./Product"

export default interface purchaseData{
	id: string,
	amount: number,
	basket: product[],
	created: number
}