import styled from 'styled-components'

const StyledTitle = styled.span`
	h1 {
		font-family: 'Space Grotesk';
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		font-size: 40px;
		line-height: 40px;
		text-align: center;
	}
	.underline {
		width: 225px;
		height: 4px;
		margin-inline: auto;
		margin-block: 0.2rem;
		background-color: var(--accent);
	}
`

export default StyledTitle
