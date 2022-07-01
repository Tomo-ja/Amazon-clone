import React, { Dispatch } from 'react'
import SubTotal from './SubTotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../context/StateProvider'
import product from '../interface/Product'
import reducerAction from '../interface/ReducerAction'
import user from '../interface/User'

export default function Checkout() {

	const [{ basket, user }, dispatch ]: [{basket: product[], user: user}, Dispatch<reducerAction>] = useStateValue()
	
  return (
	<div className='checkout'>
		<div className="checkout__left">
			<h3>Hello, {user?.email}</h3>
			<h2 className="checkout__left__title">Shopping Cart</h2>
			<div className="checkout__list">
				{ basket.map(item => (
					<CheckoutProduct 
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
		</div>
		<div className="checkout__right">
			<SubTotal />
		</div>
	</div>
  )
}
