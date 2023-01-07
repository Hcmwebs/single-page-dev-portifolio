import styled from 'styled-components'

const StyledLogo = styled.a`
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	line-height: 2rem;
	color: ${({ theme }) => theme.darkTheme.header};
	text-align: center;
	@media (min-width: ${({ theme }) => theme.screens.tablet}) {
		font-size: 2rem;
	}
`

export default StyledLogo
