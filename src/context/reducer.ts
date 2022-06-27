import context from "../interface/Context"
import reducerAction from "../interface/ReducerAction"
import product from "../interface/Product"


export const initialState: context = {
	user: undefined,
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
		default:
			return state
	}
}