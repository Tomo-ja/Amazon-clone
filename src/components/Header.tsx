import React from 'react'

export default function Header() {
  return (
	<div className='header'>
		<img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon logo" className="header__logo" />
		<div className="header__search">
			<input 
				type="text"
				className='header__search__input'
			/>
		</div>
		<div className="header__nav">
			<div className="header__nav__option">
				<span className='header__nav__option__lineOne'>Hello Guest</span>
				<span className='header__nav__option__lineTwo'>Sign In</span>
			</div>
			<div className="header__nav__option">
				<span className='header__nav__option__lineOne'>Returns</span>
				<span className='header__nav__option__lineTwo'>& Orders</span>
			</div>
			<div className="header__nav__option">
				<span className='header__nav__option__lineOne'>Your</span>
				<span className='header__nav__option__lineTwo'>Prime</span>
			</div>
		</div>
	</div>
  )
}
