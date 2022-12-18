import React from 'react'
import { ThemeProvider } from 'styled-components'
import Card from './components/Card'
import { theme, Container } from './styled'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<h1>Adam Keyes</h1>
				<Card />
			</Container>
		</ThemeProvider>
	)
}

export default App
