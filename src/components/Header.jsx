import React from 'react'
import { Container, StyledCircle, StyledHeader, StyledRings } from '../styles'
import { Hero, Nav } from '../components'

const Header = () => {
	return (
		<Container>
			<StyledHeader>
				<StyledRings className='header' />
				<StyledCircle className='header' />
				<Nav />
				<Hero />
			</StyledHeader>
		</Container>
	)
}

export default Header
