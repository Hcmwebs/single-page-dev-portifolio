import styled from 'styled-components'

const StyledLink = styled.a`
	text-decoration: none;
	font-weight: 700;
	font-size: 1rem;
	line-height: 26px;
	letter-spacing: 2.28571px;
	text-transform: uppercase;
	display: inline-block;
	padding-inline: 1rem;
	position: relative;
	cursor: pointer;
	transition: var(--transition-2);
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
