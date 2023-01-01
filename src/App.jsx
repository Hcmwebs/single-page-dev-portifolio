import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header, MainBody, Footer } from './components'
import { theme, Container, GlobalStyles } from './styles'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Header />
				<MainBody />
				<Footer/>
			</Container>
		</ThemeProvider>
	)
}

export default App
