import styled from 'styled-components'

const StyledFormintro = styled.div`
	width: min(100%, 445px);
	display: grid;
	place-items: center;
	text-align: center;
	gap: 1.25rem;

	@media (min-width: 1440px) {
		text-align: left;
		align-self: start;
		gap: 2.25rem;
	}
`
export default StyledFormintro
