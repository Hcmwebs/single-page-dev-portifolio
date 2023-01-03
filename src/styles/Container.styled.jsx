import styled from 'styled-components'

const Container = styled.div`
	color: ${({ theme }) => theme.darkTheme.body};
	background-color: ${({ theme }) => theme.darkTheme.bg};
	width: min(100%, var(--maxWidth));
	padding-inline: 1rem;
	margin: 0 auto;
	display: grid;
	place-items: center;
	position: relative;
	overflow: hidden;
	@media (min-width: ${({ theme }) => theme.screens.tablet}) {
		padding-inline: 2rem;
	}
	@media (min-width: ${({ theme }) => theme.screens.desktop}) {
		padding-inline: 10rem;
	}
`
export default Container
