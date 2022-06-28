import React from 'react'
import product from '../interface/Product'

export default function CheckoutProduct({ title, image, price, rating }: product) {
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
			<button className='checkoutProduct__info__button'>Remove from Basket</button>
		</div>
	</div>
  )
}
