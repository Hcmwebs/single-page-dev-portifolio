import styled from 'styled-components'

const NavStyled = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 1.25rem;
	padding-block: 1rem;
	@media (min-width: ${({ theme }) => theme.screens.tablet}) {
		flex-direction: row;
	}

	.socials {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.625rem;
	}
`
export default NavStyled
