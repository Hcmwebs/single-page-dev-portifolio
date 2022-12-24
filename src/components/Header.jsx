import React from 'react'
import { StyledHeader } from '../styles'
import { Hero, Nav } from '../components'

const Header = () => {
	return (
		<StyledHeader>
			<Nav />
			<Hero />
		</StyledHeader>
	)
}

export default Header
