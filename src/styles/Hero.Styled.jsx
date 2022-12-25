import styled from 'styled-components'

const StyledHero = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.5rem;
	@media (min-width: 768px) {
		flex-direction: row-reverse;
	}

	.hero-header {
		width: 190px;
		height: 242px;
		@media (min-width: 768px) {
			width: 350px;
			height: 490px;
			img {
				margin-top: -4rem;
			}
		}
		@media (min-width: 1440px) {
			width: 350px;
			height: 490px;
			img {
				margin-top: -4rem;
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
