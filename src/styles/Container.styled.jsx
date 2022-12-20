import styled from 'styled-components'

const Container = styled.div`

	color: ${({ theme }) => theme.darkTheme.body};
	background-color: ${({ theme }) => theme.darkTheme.bg};
	width:min(100%, var(--max-width));
	
`
export default Container
