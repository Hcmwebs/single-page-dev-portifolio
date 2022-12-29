import styled from 'styled-components'

const StyledTitle = styled.div`
	h2 {
		width: max-content;
		font-family: 'Space Grotesk';
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		font-size: 40px;
		line-height: 40px;
		text-align: center;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			bottom:-0.5rem;
			left:50%;
			transform: translateX(-50%);
			width: 70%;
			height: 4px;
			background-color: var(--accent);
		}
	}
`

export default StyledTitle
