import React, { useState, useEffect } from 'react'
import product from '../interface/Product'
import { useStateValue } from '../context/StateProvider'
import { db, firebaseApp } from '../Firebase'
import { collection, doc, getDoc, query, where, getDocs } from 'firebase/firestore'

export default function Orders() {

	const [{basket, user}, dispatch] = useStateValue()
	const [orders, setOrders] = useState<product[]>()

	useEffect(()=>{
		async function getHistory() {
			const docs = await getDocs(collection(db, "users", user?.uid, "orders"))
			docs.forEach(doc => {
				console.log(doc.data())
			})
		}
		if (user){
			getHistory()
		}
	},[user])

  return (
	<div className='orders'>
		<h1>Your Orders</h1>
	</div>
  )
}


//https://youtu.be/RDV3Z1KCBvo?t=27941 