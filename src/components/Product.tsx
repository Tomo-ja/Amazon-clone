import React from 'react'
import product from '../interface/Product'

export default function Product({ title, image, price, rating }: product) {
  return (
	<div className='product'>
		<div className="product__info">
			<p className='product__title'>{title}</p>
			<p className='product__price'>
				<small>$</small>
				<strong>{price}</strong>
			</p>
			<div className="product__rating">
				{Array(rating).fill(0).map((_, i) => (
					<p className="product__rating__icon">⭐</p>
				))}
			</div>
		</div>
		<img 
			className='product__image'
			src={image}
			alt=""
		/>
		<button className='product__button'>Add to Basket</button>
	</div>
  )
}
