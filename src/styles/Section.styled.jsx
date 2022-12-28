import styled from 'styled-components'

const StyledSection = styled.section`
	width: 100%;
	min-height: 50vh;
	display: grid;
	place-items: center;

	.skills {
		width: 100%;
		padding-block: 2.5rem;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(auto-fit, minmax(311px, 1fr));
		gap: 2.5rem;
		border-top: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
		border-bottom: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
	}
`

export default StyledSection
