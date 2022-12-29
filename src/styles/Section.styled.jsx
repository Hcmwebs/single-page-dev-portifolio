import styled from 'styled-components'

const StyledSection = styled.section`
	width: 100%;
	min-height: 50vh;
	display: grid;
	place-items: center;
	gap: 2.5rem;
	@media (min-width: 768px) {
		gap: 3.75rem;
	}
	@media (min-width: 1440px) {
		gap: 5rem;
	}

	.items {
		width: 100%;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(auto-fit, minmax(311px, 1fr));
		gap: 2.5rem;
		padding-block: 2.5rem;

		@media (min-width: 768px) {
			padding-block: 3.25rem;
			gap: 3.25rem 0.5rem;
		}
		@media (min-width: 768px) {
			padding-block: 4.5rem;
			gap: 3.625rem 2rem;
		}

		&.skills {
			border-top: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
			border-bottom: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
		}
	}

	.single-item {
		width: 100%;
		display: grid;
		place-items: center;
		gap: 0.25rem;
		@media (min-width: 768px) {
			justify-items: start;
		}

		h2 {
			font-size: 2rem;
			line-height: 2.5rem;
			text-align: center;
			letter-spacing: -1px;
			@media (min-width: 768px) {
				font-size: 3rem;
				line-height: 3.5rem;
				letter-spacing: -1.5px;
			}
		}
		p {
			font-size: 1rem;
			line-height: 1.625rem;
			text-align: center;

			@media (min-width: 768px) {
				font-size: 1.125rem;
				line-height: 1.75rem;
			}
		}
	}
	.project {
		width: min(100%, 540px);
		min-height: 450px;
		display:grid;
		place-items: center;
		img {
			width: 343px;
			height: 253px;
			@media (min-width: 1440px) {
				width: 540px;
				height: 487px;
			}
		}
	}
`

export default StyledSection
