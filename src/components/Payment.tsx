import React, { Dispatch, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import CurrencyFormat from 'react-currency-format'

import CheckoutProduct from './CheckoutProduct'

import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../context/reducer'
import axios from '../axios'

import context from '../interface/Context'
import reducerAction from '../interface/ReducerAction'
import product from '../interface/Product'


import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../Firebase'

export default function Payment() {

	const [{ basket, user }, dispatch ]: [context, Dispatch<reducerAction>] = useStateValue()
	const [error, setError] = useState<string | null>(null)
	const [disabled, setDisabled] = useState(true)
	const [processing, setProcessing] = useState(false)
	const [succeeded, setSucceeded] = useState(false)
	const [clientSecret, setClientSecret] = useState("")

	const stripe = useStripe()
	const elements = useElements()
	const navigate = useNavigate()

	async function handleSubmit(e: React.SyntheticEvent){
		e.preventDefault()
		setProcessing(true)

		const cardElement = elements?.getElement(CardElement)
		if (cardElement){
			const payload = await stripe?.confirmCardPayment(clientSecret, {
				payment_method:{
					card: cardElement
				}
			}).then(({paymentIntent})=> {

				const completePaymentDocRef = doc(db, 'users', String(user?.uid), 'orders', String(paymentIntent?.id))
				setDoc(completePaymentDocRef, {
					basket: basket,
					amount: paymentIntent?.amount,
					created: paymentIntent?.created
				})

				setSucceeded(true)
				setError(null)
				setProcessing(false)

				dispatch({
					type: 'EMPTY_BASKET',
					user: user,
					item: {} as product
				})

				navigate('/orders', { replace: true })
			})
		}
	}

	function handleChange(e: StripeCardElementChangeEvent){
		setDisabled(e.empty)
		setError(e.error ? e.error.message: "" )
	}

	console.log('client secret is ', clientSecret)
	useEffect(()=>{
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${Math.floor(getBasketTotal(basket) * 100)}`
			})
			console.log(response.data)
			setClientSecret(response.data.clientSecret)
		}
		getClientSecret()
	}, [basket])
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
					<form onSubmit={handleSubmit}>
						<CardElement onChange={handleChange} className='payment__section__details__input'/>
						<div className="payment__section__details__price">
							<CurrencyFormat
								renderText={(value) => (
									<h3>Order Total: {value}</h3>
								)}
								decimalScale={2}
								value={getBasketTotal(basket)}
								displayType={"text"}
								thousandSeparator={true}
								prefix={"$"}
							/>
							<button 
								className='payment__section__details__button'
								disabled={processing || disabled || succeeded}
							>
								{processing ? "Processing": "Buy Now"}
							</button>
						</div>
						{ error && <div>{error}</div>}
					</form>
				</div>
			</section>
		</div>
	</div>
  )
}
