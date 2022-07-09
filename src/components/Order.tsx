import React from 'react'
import purchaseData from '../interface/PurchaseData'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

export default function Order({amount, basket, created, id}: purchaseData) {

  return (
	<div className='order'>
		<h2>Order</h2>
		<p>{moment.unix(created).format('MMMM Do YYYY, h:mma')}</p>
		<p className="order__id"><small>{id}</small></p>
		{basket.map(item => (
			<CheckoutProduct
				id={item.id}
				title={item.title}
				image={item.image}
				price={item.price}
				rating={item.rating}
			/>
		))}
		<CurrencyFormat
			renderText={(value) => (
				<h3 className='order__total'>Order Total: {value}</h3>
			)}
			decimalScale={2}
			value={amount / 100}
			displayType={"text"}
			thousandSeparator={true}
			fixedDecimalScale={true}
			prefix={"$"}
		/>
	</div>
  )
}
