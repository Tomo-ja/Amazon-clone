import React from 'react'
import SubTotal from './SubTotal'

export default function Checkout() {
  return (
	<div className='checkout'>
		<div className="checkout__left">
			<h2 className="checkout__left__title">Shopping Cart</h2>
		</div>
		<div className="checkout__right">
			<SubTotal />
		</div>
	</div>
  )
}
