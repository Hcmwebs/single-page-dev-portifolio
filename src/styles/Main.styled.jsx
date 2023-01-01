import styled from 'styled-components'

const StyledMain = styled.main`
	width: 100%;
	padding-block: 5rem;
	display: grid;
	place-items: center;
	gap: 5rem;
	@media (min-width: 768px) {
		padding-block: 4rem;
		gap: 6.25rem;
	}
	@media (min-width: 1440px) {
		padding-block: 6.5rem;
		gap: 8.75rem;
	}
`
export default StyledMain
