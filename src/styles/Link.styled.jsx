import styled from 'styled-components'

const StyledLink = styled.a`
	text-decoration: none;
	font-weight: 700;
	font-size: 1rem;
	line-height: 26px;
	letter-spacing: 2.28571px;
	text-transform: uppercase;
	display: inline-block;
	padding: 0.75rem 1.5rem;
	position: relative;
	cursor: pointer;
	transition: var(--transition-2);
	&:hover {
		color: var(--accent);
		width: 100%;
	}

	a::before {
		content: '';
		width: 75%;
		height: 4px;
		position: absolute;
		bottom: -5px;
		background-color: var(--headingColor);
	}
`

export default StyledLink
