import styled from 'styled-components'

const StyledFormWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 3rem;
	@media (min-width: 1440px) {
		flex-direction: row;
	}

	.intro {
		width: min(100%, 445px);
		display: grid;
		place-items: center;
		text-align: center;
		gap: 1.25rem;

		@media (min-width: 1440px) {
			text-align: left;
			align-self: start;
		}
	}
`

export default StyledFormWrapper
