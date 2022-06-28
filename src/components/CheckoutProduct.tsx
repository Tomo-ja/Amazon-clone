import React, { Dispatch } from 'react'
import product from '../interface/Product'
import { useStateValue } from '../context/StateProvider'
import reducerAction from '../interface/ReducerAction'


export default function CheckoutProduct({ id, title, image, price, rating }: product) {

	const [{ basket }, dispatch ]: [{basket: product[]}, Dispatch<reducerAction>] = useStateValue()

	const removeFromBasket= () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			}
		})
	}

  return (
	<div className='checkoutProduct'>
		<img 
			className='checkoutProduct__image'
			src={image} 
			alt=""
		/>
		<div className='checkoutProduct__info'>
			<p className='checkoutProduct__info__title'>{title}</p>
			<p className='checkoutProduct__info__price'>
				<small>$</small>
				<strong>{price}</strong>
			</p>
			<div className='checkoutProduct__info__rating'>
				{Array(rating).fill(0).map((_) => (
					<p>⭐</p>
				))}
			</div>
			<button onClick={removeFromBasket} className='checkoutProduct__info__button'>Remove from Basket</button>
		</div>
	</div>
  )
}
