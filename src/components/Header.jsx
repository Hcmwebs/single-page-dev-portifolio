import React from 'react'
import { StyledCircle, StyledHeader, StyledRings } from '../styles'
import { Hero, Nav } from '../components'

const Header = () => {
	return (
		<StyledHeader>
			<StyledRings className='header' />
			<StyledCircle className='header' />
			<Nav />
			<Hero />
		</StyledHeader>
	)
}

export default Header
