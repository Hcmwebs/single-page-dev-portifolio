import styled from 'styled-components'

const StyledHero = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.5rem;
	position: relative;
	@media (min-width: 768px) {
		flex-direction: row-reverse;
	}

	img {
		width: 174px;
		height: 383px;
		position: relative;
		top: -7rem;
		@media (min-width: 768px) {
			width: 385px;
			height: 600px;
			top: -4rem;
			left: 50%;
		}
		@media (min-width: 1440px) {
			width: 445px;
			height: 720px;
			left: 72%;
		}
	}

	.hero-body {
		width: 100%;
		margin-top: -7rem;
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;

		@media (min-width: 768px) {
			width: 60%;
			justify-content: start;
			position: absolute;
			left: 0;
		}
		@media (min-width: 1440px) {
			width: 50%;
		}

		h1 {
			font-family: 'Space Grotesk';
			font-style: normal;
			font-weight: 700;
			font-size: 40px;
			line-height: 40px;
			text-align: center;
			@media (min-width: 768px) {
				font-size: 72px;
				line-height: 72px;
				letter-spacing: -2px;
				text-align: left;
			}
			@media (min-width: 1440px) {
				font-size: 88px;
				line-height: 88px;
				letter-spacing: -2.5px;
			}
			span {
				position: relative;

				&::before {
					content: '';
					width: 220px;
					height: 4px;
					background-color: var(--accent);
					position: absolute;
					bottom: -0.2rem;
					left: 10px;

					@media (min-width: 768px) {
						width: 385px;
						height: 6px;
						left: -242px;
					}
					@media (min-width: 1440px) {
						width: 470px;
						left: -300px;
					}
				}
			}
		}

		p {
			line-height: 26px;
			text-align: center;
			@media (min-width: 768px) {
				font-size: 18px;
				line-height: 28px;
				text-align: left;
			}
		}
	}
`

export default StyledHero
