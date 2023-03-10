import styled from 'styled-components'

const StyledProject = styled.div`
	width: 343px;
	min-height: 450px;
	display: grid;
	place-items: center;
	gap: 1.25rem;
	@media (min-width: 1440px) {
		width: 540px;
		cursor: pointer;
		position: relative;
		&:hover .overlay {
			display: grid;
			justify-content: center;
			align-items: center;
			.links {
				flex-direction: column;
				gap: 1.5rem;
			}
		}
	}
	.overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.8);
		display: none;
	}

	.cardBody {
		width: 100%;
		display: grid;
		place-items: center;
		justify-items: start;
		gap: 1.25rem;

		h2 {
			font-size: 1.5rem;
			line-height: 2rem;
			text-transform: uppercase;
		}

		p {
			text-transform: uppercase;
		}

		.footer {
			@media (min-width: 1440px) {
				display: none;
			}
		}
	}
`

export default StyledProject
