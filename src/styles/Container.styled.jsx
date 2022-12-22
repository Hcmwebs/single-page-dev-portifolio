import styled from 'styled-components'

const Container = styled.div`
	color: ${({ theme }) => theme.darkTheme.body};
	background-color: ${({ theme }) => theme.darkTheme.bg};
	width: min(90vw, var(--max-width));
	margin: 0 auto;
	display: grid;
	place-items: center;
	@media (min-width: ${({ theme }) => theme.screens.tablet}) {
		width: 95vw;
	}
`
export default Container
