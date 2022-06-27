import React from 'react'
import CurrencyFormat from 'react-currency-format'


export default function SubTotal() {
  return (
	<div className='subtotal'>
		<CurrencyFormat
			renderText={(value) => (
				<>
					<p>Subtotal (0 items) : <strong>0</strong></p>
					<small className='subtotal__gift'>
						<input type="checkbox" className='subtotal__gift__checkbox'/>
						This order contains a gift
					</small>
				</>
			)}
			decimalScale={2}
			value={0}
			displayType={'text'}
			thousandSeparator={true}
			prefix={'$'}
		/>

		<button className='subtotal__button'>Proceed to Checkout</button>
	</div>
  )
}
