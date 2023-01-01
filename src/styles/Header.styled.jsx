import styled from 'styled-components'

const StyledHeader = styled.header`
	width: 100%;
	display: grid;
	place-items: center;
	padding-inline: 1rem;
	@media (min-width: ${({ theme }) => theme.screens.tablet}) {
		padding-inline: 2rem;
	}
	@media (min-width: ${({ theme }) => theme.screens.desktop}) {
		padding-inline: 10rem;
	}
`

export default StyledHeader
