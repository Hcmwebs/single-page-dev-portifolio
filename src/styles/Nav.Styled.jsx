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

	a {
		&:hover .icon > path {
			transition: var(--transition-2);
			color: var(--accent);
		}
	}
	.icon > path {
		color: var(--headingColor);
	}
`
export default StyledNav
