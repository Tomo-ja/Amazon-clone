import React, { useState, useEffect } from 'react'
import product from '../interface/Product'
import { useStateValue } from '../context/StateProvider'
import { db, firebaseApp } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'
import purchaseData from '../interface/PurchaseData'
import Order from './Order'

export default function Orders() {

	const [{basket, user}, dispatch] = useStateValue()
	const [orders, setOrders] = useState<purchaseData[]>()

	useEffect(()=>{
		async function getHistory() {
			let purchaseData: purchaseData[] = []
			const docs = await getDocs(collection(db, "users", user?.uid, "orders"))
			docs.forEach((doc) => {
				let data = doc.data()
				data = {...data, id: doc.id}
				purchaseData.push(data as purchaseData)
			})
			purchaseData.sort((a, b) => (a.created > b.created) ? 1 : ((b.created > a.created) ? -1 : 0))
			setOrders(purchaseData)
		}
		if (user){
			getHistory()
		} else {
			setOrders([])
		}
	},[user])

  return (
	<div className='orders'>
		<h1>Your Orders</h1>
		<div className="orders__order">
			{orders?.map(order => (
				<Order id={order.id} amount={order.amount} basket={order.basket} created={order.created} />
			))}
		</div>
	</div>
  )
}
