import React from 'react'
import { Form, SecNav } from './index'
import { Container, StyledFooter, StyledRings } from '../styles'

const Footer = () => {
	return (
		<StyledFooter mainFooter>
			<Container>
				<StyledRings className='footer' />
				<Form />
				<hr />
				<SecNav />
			</Container>
		</StyledFooter>
	)
}

export default Footer
