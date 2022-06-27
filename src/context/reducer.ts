import context from "../interface/Context"
import reducerAction from "../interface/ReducerAction"


export const initialState: context = {
	user: undefined,
	basket: []
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