import styled from 'styled-components'

const Container = styled.div`
	color: ${({ theme }) => theme.darkTheme.body};
	background-color: ${({ theme }) => theme.darkTheme.bg};
	width: min(100%, var(--maxWidth));
	height: 100%;
	padding-inline: 1rem;
	margin: 0 auto;
	display: grid;
	place-items: center;
	position: relative;
	@media (min-width: ${({ theme }) => theme.screens.tablet}) {
		padding-inline: 2rem;
	}
	@media (min-width: ${({ theme }) => theme.screens.desktop}) {
		padding-inline: 10rem;
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100px;
		height: 100px;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&::before {
		background-position: center center;
		background-color: #fff;
		background-image: url('/pattern-rings.svg');
		z-index: 1;
	}
	&::after {
		background-position: center center;
		background-color: var(--accent);
		background-image: url('/pattern-circle.svg');
		z-index: 2;
	}
`
export default Container
