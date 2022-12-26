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

	img {
		width: 173px;
		height: 383px;
		position: relative;
		top: -6rem;
		@media (min-width: 768px) {
			width: 322px;
			height: 600px;
			top: -4rem;
			right: -1rem;
		}
		@media (min-width: 1440px) {
			width: 445px;
			height: 720px;
			right: -8rem;
		}
	}

	.hero-body {
		width: 100%;
		padding-inline: 1rem;
		padding-bottom: 3rem;
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		@media (min-width: 768px) {
			width: 50%;
			justify-content: start;
		}

		h1 {
			font-family: 'Space Grotesk';
			font-style: normal;
			font-weight: 700;
			font-size: 40px;
			line-height: 40px;
			text-align: center;
			@media (min-width: 768px) {
				text-align: left;
			}
			span {
				position: relative;

				&::before {
					content: '';
					width: 235px;
					height: 4px;
					background-color: var(--accent);
					position: absolute;
					bottom: -0.2rem;
				}
			}
		}

		p {
			line-height: 26px;
			text-align: center;
			@media (min-width: 768px) {
				text-align: left;
			}
		}
	}
`

export default StyledHero
