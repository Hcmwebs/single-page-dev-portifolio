import React from 'react'
import { FormspreeProvider } from '@formspree/react'
import { ThemeProvider } from 'styled-components'
import { Header, MainBody, Footer } from './components'
import { theme, GlobalStyles } from './styles'

const App = () => {
	return (
		<FormspreeProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<MainBody />
				<Footer />
			</ThemeProvider>
		</FormspreeProvider>
	)
}

export default App
