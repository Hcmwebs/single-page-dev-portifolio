import styled from 'styled-components'

const StyledSection = styled.section`
	width: 100%;
	min-height: 50vh;
	display: grid;
	place-items: center;

	.items {
		width: 100%;
		padding-block: 2.5rem;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(auto-fit, minmax(311px, 1fr));
		gap: 2.5rem;
		border-top: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
		border-bottom: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
	}

	.single-item {
		width: 100%;
		display: grid;
		place-items: center;
		gap: 0.25rem;

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
`

export default StyledSection
