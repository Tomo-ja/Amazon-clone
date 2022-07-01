import user from "./User"
import product from "./Product"


export default interface context{
	user: user | null,
	basket: product[]
}