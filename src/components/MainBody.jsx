import React from 'react'
import { Skills, Projects } from '../components'
import { Container, StyledMain, StyledRings } from '../styles'

const MainBody = () => {
	return (
		<StyledMain>
			<StyledRings left='189px' top='1370px' />
			<Skills />
			<Projects />
		</StyledMain>
	)
}

export default MainBody
