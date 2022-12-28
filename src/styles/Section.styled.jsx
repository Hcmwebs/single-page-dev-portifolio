import styled from 'styled-components'

const StyledSection = styled.section`
	width: 100%;
	min-height: 50vh;
	padding-top:3rem;
	border-top: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
	border-bottom: 1px solid ${({ theme }) => theme.darkTheme.bodyColor};
`

export default StyledSection
