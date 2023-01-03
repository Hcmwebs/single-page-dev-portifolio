import styled from 'styled-components'

const Container = styled.div`
	width: min(100%, var(--maxWidth));
	padding-inline: 1rem;
	margin: 0 auto;
	display: grid;
	place-items: center;
	position: relative;
	overflow: hidden;
	@media (min-width: 768px) {
		padding-inline: 2rem;
	}
	@media (min-width: 1440px) {
		padding-inline: 10rem;
	}
`
export default Container
