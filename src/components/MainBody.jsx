import React from 'react'
import { Skills, Projects } from '../components'
import { Container, StyledMain, StyledRings } from '../styles'

const MainBody = () => {
	return (
		<StyledMain>
			<StyledRings className='main' />
			<Skills />
			<Projects />
		</StyledMain>
	)
}

export default MainBody
