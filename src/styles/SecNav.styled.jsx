import styled from 'styled-components'

const StyledSecNav = styled.div`
	width: min(100%, 100%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 1.25rem;
	padding: 1rem;
	padding-top: 2rem;
	position: relative;
	@media (min-width: 768px) {
		width: 100%;
		padding-top: 3rem;
		flex-direction: row;
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
export default StyledSecNav
