import React from 'react'
import { StyledNav } from '../styles'
import { Socials } from '../components'

const Nav = () => {
	return (
		<StyledNav>
			<a
				href='https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x/hub'
				target='_blank'
				rel='noopener noreferrer'
				className='logo'>
				adamkeyes
			</a>
			<Socials />
		</StyledNav>
	)
}

export default Nav
