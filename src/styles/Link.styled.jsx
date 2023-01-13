import styled from 'styled-components'

const StyledLink = styled.a`
	width: max-content;
	margin: 0 auto;
	height: 1.75rem;
	font-weight: 700;
	font-size: 1rem;
	line-height: 26px;
	letter-spacing: 2.28571px;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	display: grid;
	place-items: center;
	justify-items: start;
	position: relative;
	cursor: pointer;
	transition: var(--transition-2);
	&.projects-link {
		margin: 0 0;
	}
	@media (min-width: 768px) {
		text-align: left;
		margin: 0 0;
	}
	&:hover {
		color: var(--accent);
		&::before {
			width: 100%;
			background-color: var(--accent);
		}
	}

	&::before {
		content: '';
		width: 40px;
		height: 4px;
		position: absolute;
		bottom: -0.2rem;
		background-color: var(--accent);
		transition: var(--transition-2);
	}
`

export default StyledLink
