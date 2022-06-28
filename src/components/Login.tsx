import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db, auth, registerWithEmailAndPassword, logInWithEmailAndPassword } from '../Firebase'
import user from '../interface/User'

export default function Login() {

	const navigate = useNavigate()
	let user: user | undefined = undefined

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = async (e: React.SyntheticEvent) => {
		e.preventDefault()

		try{
			user = await logInWithEmailAndPassword(email, password)
			navigate('/')
		} catch(err) {
			console.error(err)
			alert(err)
		}
	}

	const register = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		try{
			user = await registerWithEmailAndPassword(email, password)
			navigate('/')
		} catch(err) {
			console.error(err)
			alert(err)
		}
	}

  return (
	<div className='login'>
		<Link to='/'>
			<img 
				className='login__logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
				alt=''
			/>
		</Link>
		<div className="login__container">
			<h1 className='login__container__title'>Sign in</h1>
			<form className='login__form' onSubmit={signIn}>
				<h5 className='login__form__label'>E-mail</h5>
				<input 
					value={email}
					className='login__form__input' 
					type="text" 
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<h5 className='login__form__label'>Password</h5>
				<input 
					value={password}
					className='login__form__input' 
					type="password" 
					onChange={e => setPassword(e.target.value)}
					required
				/>

				<button className='login__form__button'>Sign In</button>
			</form>
			<p className='login__container__condition'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
			<button 
				className='login__container__resisterButton'
				onClick={register}
			>Create your Amazon Account
			</button>
		</div>
	</div>
  )
}
