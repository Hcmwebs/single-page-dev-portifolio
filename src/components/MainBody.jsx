import React from 'react'
import { Skills, Projects } from '../components'
import { Container, StyledMain, StyledRings } from '../styles'

const MainBody = () => {
	return (
		<StyledMain>
			<Container>
				<StyledRings className='main' />
				<Skills />
				<Projects />
			</Container>
		</StyledMain>
	)
}

export default MainBody
