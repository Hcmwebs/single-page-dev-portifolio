import React from 'react'
import { Form, FormWrapper, SecNav } from './index'
import { Container, StyledFooter, StyledRings } from '../styles'

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<StyledRings className='footer' />
				<FormWrapper />
				<hr />
				<SecNav />
			</Container>
		</StyledFooter>
	)
}

export default Footer
