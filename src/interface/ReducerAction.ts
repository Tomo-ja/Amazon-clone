import product from "./Product";
import user from "./User";

export default interface reducerAction{
	type: string,
	item: product,
	user: user | null
}