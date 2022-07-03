import context from "../interface/Context"
import reducerAction from "../interface/ReducerAction"
import product from "../interface/Product"


export const initialState: context = {
	user: null,
	basket: []
}

export const getBasketTotal = (basket: product[]): number => {
	return basket?.reduce((amount, item) => item.price + amount, 0)
}

export const reducer = (state: context, action: reducerAction) => {
	switch(action.type){
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item]
			}
		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex(
				basketItem => basketItem.id === action.item.id
			)
			let newBasket = [...state.basket]
			if (index >= 0){
				newBasket.splice(index, 1)
			} else {
				console.warn("something is wrong here")
			}
			return {
				...state,
				basket: newBasket
			}
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'EMPTY_BASKET':
			return {
				...state,
				basket: []
			}
		default:
			return state
	}
}