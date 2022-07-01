import React, { Dispatch } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../context/reducer'
import { Link, useNavigate  } from 'react-router-dom'
import context from '../interface/Context'
import reducerAction from '../interface/ReducerAction'


export default function SubTotal() {
	
	const [ { basket }, dispatch ]: [context, Dispatch<reducerAction>] = useStateValue()

	const navigate = useNavigate()
	function proceedPayment(e: React.SyntheticEvent) {
		e.preventDefault()
		navigate('/payment')
	}

  return (
	<div className='subtotal'>
		<CurrencyFormat
			renderText={(value) => (
				<>
					<p>Subtotal ({ basket.length } items) : <strong>{ value }</strong></p>
					<small className='subtotal__gift'>
						<input type="checkbox" className='subtotal__gift__checkbox'/>
						This order contains a gift
					</small>
				</>
			)}
			decimalScale={2}
			value={getBasketTotal(basket)}
			displayType={'text'}
			thousandSeparator={true}
			prefix={'$'}
		/>

		<button onClick={proceedPayment} className='subtotal__button'>Proceed to Checkout</button>
	</div>
  )
}
