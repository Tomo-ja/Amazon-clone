import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = (e: React.SyntheticEvent) => {
		e.preventDefault()

		// firebase thing
	}

	const register = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()

		// firebase thing
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
				/>
				<h5 className='login__form__label'>Password</h5>
				<input 
					value={password}
					className='login__form__input' 
					type="password" 
					onChange={e => setPassword(e.target.value)}
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
