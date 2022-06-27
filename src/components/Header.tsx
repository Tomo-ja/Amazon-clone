import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../context/StateProvider';

export default function Header() {

	const [ { basket } ] = useStateValue()

  return (
	<div className='header'>
		<Link to='/'>
			<img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon logo" className="header__logo" />
		</Link>
		<div className="header__search">
			<input 
				type="text"
				className='header__search__input'
			/>
			<SearchIcon className='header__search__icon' />
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
			<Link to='/checkout'>
				<div className="header__nav__option header__nav__basket">
					<ShoppingBasketIcon className='header__nav__basket__icon' />
					<span className='header__nav__option__lineTwo header__nav__basket__count'>{basket?.length}</span>
				</div>
			</Link>
		</div>
	</div>
  )
}
