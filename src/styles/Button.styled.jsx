import styled from 'styled-components'

const StyledButton = styled.button`
	width: max-content;
	padding-block: 0.75rem;
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
	border: none;
	outline: none;
	background-color: transparent;
	transition: var(--transition-2);

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
		bottom: 0;
		background-color: var(--accent);
		transition: var(--transition-2);
	}
  &.submit{
    justify-self:end;
  }
`

export default StyledButton
