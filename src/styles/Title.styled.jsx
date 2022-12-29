import styled from 'styled-components'

const StyledTitle = styled.div`
	h2 {
		width: max-content;
		font-size: 40px;
		line-height: 40px;
		text-align: center;
		position: relative;
		@media (min-width: 768px) {
			font-size: 72px;
			line-height: 72px;
			letter-spacing: -2px;
		}
		@media (min-width: 1440px) {
			font-size: 88px;
			line-height: 88px;
			letter-spacing: -2.5px;
		}
		&::before {
			content: '';
			position: absolute;
			bottom: -0.5rem;
			left: 50%;
			transform: translateX(-50%);
			width: 70%;
			height: 4px;
			background-color: var(--accent);
		}
	}
`

export default StyledTitle
