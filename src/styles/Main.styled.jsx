import styled from 'styled-components'

const StyledMain = styled.main`
	width: 100%;
	padding: 5rem 1rem;
	display: grid;
	place-items: center;
	gap: 5rem;
	@media (min-width: 768px) {
		padding: 4rem 2rem;
		gap: 6.25rem;
	}
	@media (min-width: 1440px) {
		padding: 6.5rem 10rem;
		gap: 8.75rem;
	}
`
export default StyledMain
