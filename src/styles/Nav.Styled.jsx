import styled from 'styled-components'

const StyledNav = styled.nav`
	width: min(100%, 100%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 1.25rem;
	padding: 1rem;
	position: relative;
	z-index: 9;

	@media (min-width: 768px) {
		width: 100%;
		flex-direction: row;
	}
	.logo {
		font-size: 1.5rem;
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		line-height: 2rem;
		color: ${({ theme }) => theme.darkTheme.header};
		text-align: center;
		@media (min-width: ${({ theme }) => theme.screens.tablet}) {
			font-size: 2rem;
		}
	}

	.socials {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.625rem;
	}
	a {
		&:hover .icon > path {
			transition: var(--transition-2);
			color: var(--accent);
		}
	}
	.icon > path {
		color: ${({ theme }) => theme.darkTheme.header};
	}
`
export default StyledNav
