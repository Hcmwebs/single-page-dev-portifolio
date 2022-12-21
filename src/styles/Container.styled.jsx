import styled from 'styled-components'

const Container = styled.div`
	color: ${({ theme }) => theme.darkTheme.body};
	background-color: ${({ theme }) => theme.darkTheme.bg};
	width: min(100%, var(--max-width));
	padding-inline: 1rem;
	margin: 0 auto;
	display: grid;
	place-items: center;
`
export default Container
