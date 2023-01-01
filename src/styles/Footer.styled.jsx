import styled from 'styled-components'

const StyledFooter = styled.footer`
	width: 100%;
	display: grid;
	place-items: center;
	gap: 2.5rem;
	padding-block: 3.75rem;
	background-color: ${({ theme }) => theme.darkTheme.footer};

	hr {
		width: 100%;
		padding-inline: 1rem;
		@media (min-width: ${({ theme }) => theme.screens.tablet}) {
			padding-inline: 2rem;
		}
		@media (min-width: ${({ theme }) => theme.screens.desktop}) {
			padding-inline: 10rem;
		}
	}
`

export default StyledFooter
