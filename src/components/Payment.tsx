import React, { Dispatch } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import context from '../interface/Context'
import reducerAction from '../interface/ReducerAction'
import CheckoutProduct from './CheckoutProduct'

export default function Payment() {

	const [{ basket, user }, dispatch ]: [context, Dispatch<reducerAction>] = useStateValue()

  return (
	<div className='payment'>
		<div className="payment__container">
			<h1 className='payment__container__title'>Checkout (<Link to="/checkout" className='payment__container__title-link'>{basket?.length} items</Link>)</h1>
			<section className="payment__section">
				<div className="payment__section__title">
					<h3>Delivery Address</h3>
				</div>
				<div className="payment__section__address">
					<p>{user?.email}</p>
					<p>123 React Lane</p>
					<p>Los Angeles, CA</p>
				</div>
			</section>
			<section className="payment__section">
				<div className="payment__section__title">
					<h3>Review items and delivery</h3>
				</div>
				<div className="payment__section__items">
					{basket.map(item => (
						<CheckoutProduct 
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</section>
			<section className="payment__section">
				<div className="payment__section__title">
					<h3>Payment Method</h3>
				</div>
				<div className="payment__section__details">

				</div>
			</section>
		</div>
	</div>
  )
}
