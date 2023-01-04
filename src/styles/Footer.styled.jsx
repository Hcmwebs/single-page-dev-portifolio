import styled from 'styled-components'

const StyledFooter = styled.footer`
	width: 100%;
	display: grid;
	place-items: center;
	padding-block: 3.75rem;
	background-color: ${({ theme }) => theme.darkTheme.footer};
	margin-top: auto;
	hr {
		width: 100%;
	}

`

export default StyledFooter
