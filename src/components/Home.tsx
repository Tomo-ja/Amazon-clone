import React from 'react'
import Product from './Product'

export default function Home() {
  return (
	<div className='home'>
		<div className="home__container">
			<img 
				src='https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/Zjc1NTA4OGMt/Zjc1NTA4OGMt-MWFmZWRlOTQt-w3000._CB649606900_.jpg' 
				alt=''
				className='home__container__image'
			/>
			<div className="home__container__row">
				<Product 
					id={1234}
					title='MAXJULI Polarized Sunglasses for Men and Women,UV Protection Rectangular Sun Glasses 8806'
					image='https://images-na.ssl-images-amazon.com/images/I/41mXUVINFNL._AC_SR400,600_.jpg'
					price={20.55}
					rating={4}
				/>
			</div>
			<div className="home__container__row">
			</div>
			<div className="home__container__row">
			</div>
		</div>
	</div>
  )
}
