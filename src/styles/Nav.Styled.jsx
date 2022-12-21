import styled from 'styled-components'

const NavStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 1.25rem;
	padding-block: 1rem;

	.socials {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.625rem;
	}
`
export default NavStyled
