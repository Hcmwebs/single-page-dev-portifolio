import React from 'react'
import { ThemeProvider } from 'styled-components'
import {Projects} from './components'
import { theme, Container,GlobalStyles} from './styles'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<h1>Adam Keyes</h1>
				<Projects />
			</Container>
		</ThemeProvider>
	)
}

export default App
