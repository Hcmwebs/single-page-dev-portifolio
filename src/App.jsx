import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header, MainBody, Footer } from './components'
import { theme, GlobalStyles } from './styles'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<MainBody />
			<Footer />
		</ThemeProvider>
	)
}

export default App
