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
		width: 174px;
		height: 343px;
		position: relative;
		@media (min-width: 768px) {
			width: 322px;
			height: 600px;
			img {
				top: -4rem;
			}
		}
		@media (min-width: 1440px) {
			width: 445px;
			height: 720px;
			img {
				right: -3.8rem;
			}
		}
	}
	img {
		height: 100%;
		position: absolute;
		top: -2rem;
	}
	.hero-body {
		width: 100%;
		padding-inline: 1rem;

		h1 {
			width: 100%;
			span {
				position: relative;
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
