import React from 'react'
import { Form } from './index'
import { Container, StyledFooter } from '../styles'

const Footer = () => {
	return (
		<StyledFooter mainFooter>
			<Container>
				<Form />
				<hr />
				<div>Footer nav goes here</div>
			</Container>
		</StyledFooter>
	)
}

export default Footer
