import React from 'react'
import { StyledCircle, StyledHeader, StyledRings } from '../styles'
import { Hero, Nav } from '../components'

const Header = () => {
	return (
		<StyledHeader>
			<StyledRings top='125px' left='-341px' />
			<StyledCircle top='254px' left='311px' />
			<Nav />
			<Hero />
		</StyledHeader>
	)
}

export default Header
