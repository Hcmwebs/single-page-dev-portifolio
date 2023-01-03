import React from 'react'
import { Container, StyledCircle, StyledHeader, StyledRings } from '../styles'
import { Hero, Nav } from '../components'

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<StyledRings className='header' />
				<StyledCircle className='header' />
				<Nav />
				<Hero />
			</Container>
		</StyledHeader>
	)
}

export default Header
