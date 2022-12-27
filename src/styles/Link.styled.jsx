import styled from 'styled-components'

const StyledLink = styled.a`
	font-weight: 700;
	font-size: 1rem;
	line-height: 26px;
	letter-spacing: 2.28571px;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	display: inline-block;
	position: relative;
	cursor: pointer;
	transition: var(--transition-2);
	@media (min-width: 768px) {
		text-align: left;
	}
	&:hover {
		color: var(--accent);
		&::before {
			width: 128px;
			background-color: var(--accent);
		}
	}

	&::before {
		content: '';
		width: 40px;
		height: 4px;
		position: absolute;
		bottom: -0.2rem;
		background-color: var(--headingColor);
		transition: var(--transition-2);
	}
`

export default StyledLink
