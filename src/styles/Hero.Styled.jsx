import styled from 'styled-components'

const StyledHero = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.5rem;
	@media (min-width: ${({ theme }) => theme.screens.tablet}) {
		flex-direction: row-reverse;
	}

	.hero-header {
		width: 190px;
		height: 242px;
		@media (min-width: ${({ theme }) => theme.screens.tablet}) {
			width: 350px;
			height: 490px;
			img {
				margin-top: 0;
				margin-right: -2rem;
			}
		}
	}
	img {
		width: 100%;
		height: 100%;
		margin-top: -10rem;
	}
	.hero-body {
		width: 100%;
		padding-inline: 1rem;

		h1 {
			width: 100%;
			span {
				position: relative;
				width: max-content;
				&::after {
					content: '';
					position: absolute;
					width: 80%;
					height: 3px;
					background-color: var(--accent);
					margin: 0.25rem auto 0 auto;
				}
			}
		}

		p {
		}
	}
`

export default StyledHero
